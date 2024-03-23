export default function SignUp() {
    return (
        <form className="flex justify-center items-center min-h-screen">
            <div className="w-1/3 border shadow-md rounded-md p-6">
                <h1 className="flex justify-center items-center text-5xl font-bold">SaaS</h1>
                <p className="text-center my-4 text-sm">
                    Ao me logar, aceito os <a href="" target="_blank" className="font-bold hover:opacity-80">Termos de Uso</a> e <a href="" target="_blank" className="font-bold hover:opacity-80">Política de Privacidade</a> do SaaS e afirmo ter 15 anos ou mais.
                    </p>
                <div className="w-full flex flex-col gap-2">
                    <input className="border border-gray-300 rounded-md p-4 outline-none" type="email" name="email" placeholder="Email" />
                    <input className="border border-gray-300 rounded-md p-4 outline-none" type="password" name="password" id="password" placeholder="Senha" />
                </div>
                <div className="flex justify-between my-2">
                    <div className="flex justify-center items-center">
                        <input className="mr-2" type="checkbox" name="permanecer_conectado" id="permanecer_conectado" />
                        <label htmlFor="permanecer_conectado">Permancer Conectado</label>
                    </div>
                    <a href="" className="flex justify-end font-semibold hover:opacity-85">Esqueci minha senha</a>
                </div>
                <button className="w-full p-2.5 border rounded-md bg-slate-950 hover:bg-slate-800 text-white font-semibold">Entrar</button>
                <div className="flex flex-row justify-center items-center my-2">
                    <div className="h-px w-full bg-gray-300" />
                    <div className="mx-2">ou</div>
                    <div className="h-px w-full bg-gray-300" />
                </div>
                <div className="flex flex-col gap-2">
                    <button className="w-full p-2.5 border rounded-md hover:bg-stone-100 font-semibold">Criar Conta</button>
                    <button className="w-full p-2.5 border rounded-md bg-slate-950 hover:bg-slate-800 text-white font-semibold">Entrar com o Google</button>
                </div>
            </div>
        </form>
    )
}
