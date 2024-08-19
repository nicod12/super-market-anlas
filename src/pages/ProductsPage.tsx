import GalleryProducts from "@/components/gallery/GalleryProducts";

const ProductsPage = () => {
    return (
        <section className="container">
            <article>
                <h2 className="text-center text-[#0e1c85] text-[22px] mt-[50px] mx-0 mb-5">Productos de nuestro negocio</h2>
                <p className="text-center">Si buscás algún prodcuto en especial que no se encuentra en la
                    lista por favor no dudes en contactarnos:</p>
                    <p className="text-[#51c2f1] text-center mb-4"><strong>CONTACTO</strong></p>
            </article>

            <section>
                <GalleryProducts />
            </section>
        </section>
    );
};

export default ProductsPage;
