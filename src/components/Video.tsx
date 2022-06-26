import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";


import '@vime/core/themes/default.css'
import { useGetLessonBySlugQuery } from "../graphql/generated";
import { Button } from "./Button";
import { Card } from "./Card";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin, } from 'react-loader-spinner'


interface VideoProps {
  lessonSlug: string;
}


export function Video({ lessonSlug }: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug

    }
  })


  if (!data || !data.lesson) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <TailSpin
          height="100"
          width="100"
          color='grey'
          ariaLabel='loading'
        />
      </div>
    )
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-center gap-16 flex-col md:flex-row ">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher.avatarURL}
                  alt=""
                />

                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                  <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                </div>
              </div>
            )}
          </div>

          <div className=" flex flex-col  w-full md:w-auto gap-4">
            <Button
              type="community"
              title="Comunidade do Discord"
              icon={<DiscordLogo size={24} />}
            />

            <Button
              type="challenge"
              title="Acesse o desafio"
              icon={<Lightning size={24} />}
            />

          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-1 md:grid-cols-2">
          <Card
            title="Material complementar"
            description="Acesse o material complementar para acelerar o seu desenvolvimento"
            firstIcon={<FileArrowDown size={40} />}
            secondIcon={<CaretRight size={24} />}
          />

          <Card
            title="Wallpapers exclusivos"
            description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
            firstIcon={<FileArrowDown size={40} />}
            secondIcon={<CaretRight size={24} />}
          />



        </div>

      </div>
    </div>
  )
}