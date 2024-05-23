import { Mail } from '@/components/organisms'

function Contact() {
  return (
    <div className="flex flex-1 flex-col justify-evenly rounded-lg bg-gray-500/5 p-8 backdrop-blur-3xl">
      <div className="w-ful mb-6">
        <h1 className="text-2xl font-semibold text-indigo-50">
          Vamos se conectar ?
        </h1>
        <h2 className="text text-lg tracking-widest text-indigo-50">
          Olá sinta-se a vontade para nos contactar sobre qualquer projeto,
          colaboracoes e ofertas de trabalho:{' '}
        </h2>
      </div>
      <Mail />
    </div>
  )
}

export default Contact
