const Banner = () => {
    return (
        <section className="px-15 bg-neutral-100 grid gap-4 grid-cols-1 md:grid-cols-2">
            <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
                <p className="text-4xl font-bold md:text-4xl mb-4 text-orange-600">25% DE DESCONTO</p>
                <p className="text-4xl font-bold md:text-6xl md:leading-19 text-center mb-6">PROMOÇÃO DE VERÃO</p>
                <p className="mt-2 text-sm md:text-lg">Por tempo limitado!</p>
                <button className="text-lg md:text-1xl bg-orange-600 text-white py-2 px-5 mt-8 hover:bg-orange-700 cursor-pointer">
                    Compre agora
                </button>
            </div>
            <div className="order-1 lg:order-2 bg-red-300">
                <img
                    className="h-[90vh] w-full object-cover"
                    src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                    alt=""
                />
            </div>
        </section>
    )
}

export default Banner
