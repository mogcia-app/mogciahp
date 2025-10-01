// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, addDoc, updateDoc, deleteDoc, query, orderBy, where } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq6u0AFo4au2Gvu93yhFgZrowBnfv2KBM",
  authDomain: "mogcia-47a6d.firebaseapp.com",
  projectId: "mogcia-47a6d",
  storageBucket: "mogcia-47a6d.firebasestorage.app",
  messagingSenderId: "996845212113",
  appId: "1:996845212113:web:c0299bf302598e1d72d0f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Storage
export const storage = getStorage(app);

// Initialize Auth
export const auth = getAuth(app);

export interface NewsArticle {
  id: string
  title: string
  date: string
  type: 'PRESS RELEASE' | 'NEWS' | 'ANNOUNCEMENT'
  content?: string
  link?: string
  published: boolean
  imageUrl?: string
  imageAlt?: string
  createdAt?: Date
  updatedAt?: Date
}

export interface BlogPost {
  id: string
  title: string
  date: string
  content: string
  excerpt?: string
  published: boolean
  imageUrl?: string
  imageAlt?: string
  tags?: string[]
  createdAt?: Date
  updatedAt?: Date
}

// Firestoreからニュース記事を取得
export const getNewsArticles = async (): Promise<NewsArticle[]> => {
  try {
    const newsRef = collection(db, 'news')
    const q = query(newsRef, orderBy('date', 'desc'))
    const querySnapshot = await getDocs(q)
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as NewsArticle))
  } catch (error) {
    console.error('Error getting news articles:', error)
    return []
  }
}

// Firestoreから公開記事のみを取得
export const getPublishedNewsArticles = async (): Promise<NewsArticle[]> => {
  try {
    const newsRef = collection(db, 'news')
    const q = query(newsRef, where('published', '==', true), orderBy('date', 'desc'))
    const querySnapshot = await getDocs(q)
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as NewsArticle))
  } catch (error) {
    console.error('Error getting published news articles:', error)
    return []
  }
}

// Firestoreにニュース記事を追加
export const addNewsArticle = async (article: Omit<NewsArticle, 'id'>): Promise<string | null> => {
  try {
    const newsRef = collection(db, 'news')
    const docRef = await addDoc(newsRef, {
      ...article,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    return docRef.id
  } catch (error) {
    console.error('Error adding news article:', error)
    return null
  }
}

// Firestoreのニュース記事を更新
export const updateNewsArticle = async (id: string, article: Partial<NewsArticle>): Promise<boolean> => {
  try {
    const newsRef = doc(db, 'news', id)
    await updateDoc(newsRef, {
      ...article,
      updatedAt: new Date()
    })
    return true
  } catch (error) {
    console.error('Error updating news article:', error)
    return false
  }
}

// Firestoreからニュース記事を削除
export const deleteNewsArticle = async (id: string): Promise<boolean> => {
  try {
    const newsRef = doc(db, 'news', id)
    await deleteDoc(newsRef)
    return true
  } catch (error) {
    console.error('Error deleting news article:', error)
    return false
  }
}

// Blog functions
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const blogRef = collection(db, 'blog')
    const q = query(blogRef, orderBy('date', 'desc'))
    const querySnapshot = await getDocs(q)
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as BlogPost))
  } catch (error) {
    console.error('Error getting blog posts:', error)
    return []
  }
}

export const getPublishedBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const blogRef = collection(db, 'blog')
    const q = query(blogRef, where('published', '==', true), orderBy('date', 'desc'))
    const querySnapshot = await getDocs(q)
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as BlogPost))
  } catch (error) {
    console.error('Error getting published blog posts:', error)
    return []
  }
}

export const addBlogPost = async (post: Omit<BlogPost, 'id'>): Promise<string | null> => {
  try {
    const blogRef = collection(db, 'blog')
    const docRef = await addDoc(blogRef, {
      ...post,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    return docRef.id
  } catch (error) {
    console.error('Error adding blog post:', error)
    return null
  }
}

export const updateBlogPost = async (id: string, post: Partial<BlogPost>): Promise<boolean> => {
  try {
    const blogRef = doc(db, 'blog', id)
    await updateDoc(blogRef, {
      ...post,
      updatedAt: new Date()
    })
    return true
  } catch (error) {
    console.error('Error updating blog post:', error)
    return false
  }
}

export const deleteBlogPost = async (id: string): Promise<boolean> => {
  try {
    const blogRef = doc(db, 'blog', id)
    await deleteDoc(blogRef)
    return true
  } catch (error) {
    console.error('Error deleting blog post:', error)
    return false
  }
}

// Firebase Storageに画像をアップロード
export const uploadImage = async (file: File, path: string): Promise<string | null> => {
  try {
    const storageRef = ref(storage, `news-images/${path}`)
    const snapshot = await uploadBytes(storageRef, file)
    const downloadURL = await getDownloadURL(snapshot.ref)
    return downloadURL
  } catch (error) {
    console.error('Error uploading image:', error)
    return null
  }
}

// Firebase Storageから画像を削除
export const deleteImage = async (imageUrl: string): Promise<boolean> => {
  try {
    const imageRef = ref(storage, imageUrl)
    await deleteObject(imageRef)
    return true
  } catch (error) {
    console.error('Error deleting image:', error)
    return false
  }
}

// Authentication functions
export const signInAdmin = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    return { success: true }
  } catch (error: any) {
    console.error('Sign in error:', error)
    let errorMessage = 'ログインに失敗しました'
    
    switch (error.code) {
      case 'auth/user-not-found':
        errorMessage = 'ユーザーが見つかりません'
        break
      case 'auth/wrong-password':
        errorMessage = 'パスワードが間違っています'
        break
      case 'auth/invalid-email':
        errorMessage = 'メールアドレスが無効です'
        break
      case 'auth/too-many-requests':
        errorMessage = 'ログイン試行回数が多すぎます。しばらく待ってから再試行してください'
        break
    }
    
    return { success: false, error: errorMessage }
  }
}

export const signOutAdmin = async (): Promise<void> => {
  try {
    await signOut(auth)
  } catch (error) {
    console.error('Sign out error:', error)
  }
}

export const getCurrentUser = (): User | null => {
  return auth.currentUser
}

export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback)
}

// 初期データをFirestoreに追加（初回のみ）
export const initializeNewsData = async (): Promise<void> => {
  try {
    const existingArticles = await getNewsArticles()
    if (existingArticles.length > 0) {
      console.log('News data already exists, skipping initialization')
      return
    }

    const initialData: Omit<NewsArticle, 'id'>[] = [
      {
        title: '東京証券取引所グロース市場への新規上場承認に関するお知らせ',
        date: '2025.09.19',
        type: 'PRESS RELEASE',
        published: true
      },
      {
        title: 'MOGCIA、リージョナルマーケティングの北海道に特化したスマホ決済サービス「EZO Pay（エゾペイ）」基盤に「AI Solutions」を提供',
        date: '2025.09.12',
        type: 'PRESS RELEASE',
        published: true
      },
      {
        title: '【2025年版 中小企業のBtoB決済トレンド調査】「AI活用の請求書処理」の認知率6割・利用意向4割に',
        date: '2025.08.28',
        type: 'PRESS RELEASE',
        published: true
      }
    ]

    for (const article of initialData) {
      await addNewsArticle(article)
    }
    
    console.log('Initial news data added to Firestore')
  } catch (error) {
    console.error('Error initializing news data:', error)
  }
}
