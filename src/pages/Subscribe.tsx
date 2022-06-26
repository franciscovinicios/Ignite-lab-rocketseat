import { gql, useMutation } from "@apollo/client";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";



export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const userStorageKey = '@ignitelab:user'

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  useEffect(() => {
    const userLogged = localStorage.getItem('@ignitelab:user');


    if(userLogged) {
      navigate('/event')
    }
  },[])

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()

    const user = {
      name,
      email
    }

    await createSubscriber({
      variables: {
        name,
        email,
      }
    })
    localStorage.setItem(userStorageKey, JSON.stringify(user));
    navigate('/event')
  }

  return (
    <div className=" px-2 min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center ">
      <div className="w-4/5 flex gap-6 flex-col items-center lg:max-w-[68.75rem]  lg:flex-row lg:justify-between  justify-between mt-20 mx-auto">

        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8  text-3xl lg:text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">Em apenas uma semana você vai dominar na prática uma das tecnologias mais
            utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
            />

            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Digite seu e-mail"
              onChange={event => setEmail(event.target.value)}

            />

            <button
              type="submit"
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 disabled:opacity-50 transition-colors"
              disabled={loading}
            >
              Garantir minha vaga
            </button>


          </form>

        </div>
      </div>

      <img src="/src/assets/code-mockup.png" className="mt-10" alt="" />
    </div>
  )
}