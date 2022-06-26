import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";


export function Event() {
  const { slug } = useParams<{ slug: string }>()

  const navigate = useNavigate()
  const userStorageKey = '@ignitelab:user'

  useEffect(() => {
    const userLogged = localStorage.getItem(userStorageKey);

    if (!userLogged) {
      navigate('/')
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ?
          <Video lessonSlug={slug} />
          : <Video lessonSlug='abertura' />}
        <Sidebar />
      </main>
    </div>
  )
}