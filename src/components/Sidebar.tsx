import { useGetLessonsQuery } from '../graphql/generated';
import { useState } from 'react';
import { Lesson } from './Lesson';
import classNames from 'classnames';
import { List, X } from 'phosphor-react';
import { HamburguerButton } from './HamburguerButton';

export function Sidebar() {
  const { data } = useGetLessonsQuery();
  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <>
      <HamburguerButton
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <aside
        className={classNames(
          'lg:relative lg:block lg:w-[21.75rem] bg-gray-700 p-2 border-l border-gray-600',
          {
            'block w-full min-h-[180vh] absolute z-50': isOpen,
            'hidden ': !isOpen,
          }
        )}
      >
        <div className="h-full p-4 scrollbar-thumb-green-500 scrollbar-track-gray-700 scrollbar-thin flex-1">
          <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
            Cronogramas de aulas
          </span>
          <div className="flex flex-col gap-8">
            {data?.lessons.map((lesson) => {
              return (
                <div key={lesson.id} onClick={() => setIsOpen(!isOpen)}>
                  <Lesson
                    key={lesson.id}
                    title={lesson.title}
                    slugPage={lesson.slug}
                    availableAt={new Date(lesson.availableAt)}
                    type={lesson.lessonType}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}