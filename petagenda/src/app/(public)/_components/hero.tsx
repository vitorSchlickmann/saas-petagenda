import { Button } from "@/components/ui/button";
import Image from 'next/image';
import petImage from '../../../../public/3823098.jpg';

export function Hero() {
    return (
        <section className="bg-white">
            <div className="container mx-auto px-4 pt-20 pb-4 sm:px-6 lg:px-8">
                <main className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <article className="flex-1 space-y-8 max-w-2xl">
                        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                            Encontre os melhores Petshops<br />
                            em um <span className="text-orange-700">único local</span>.
                        </h1>
                        <p className="text-base md:text-lg text-gray-600">
                            Nós somos uma plataforma para petshops com o foco em agilizar o atendimento do seu pet de forma simplificada e organizada.
                        </p>
                        <Button className="bg-orange-700 hover:bg-orange-600 w-fit px-6 font-semibold">
                            Encontre uma Petshop
                        </Button>
                    </article>

                    <div className="flex-1 hidden lg:flex justify-center">
                        <Image
                            src={petImage}
                            alt="Imagem de homem com o Pet"
                            width={500}
                            height={400}
                            className="object-contain"
                            quality={100}
                            priority
                        />
                    </div>
                </main>
            </div>
        </section>
    );
}
