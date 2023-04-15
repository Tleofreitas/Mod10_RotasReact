import { useParams } from "react-router";
import { getProduct, getProducts } from "../../../data";

export default function Product() {
    const params = useParams();

    let product = getProduct(Number(params.productId));
    return (
        <>
            {
                product &&
                <main>
                    <section>
                        <div className="container">
                            <div className="mt20">
                                <p>{product.title1}</p>
                                <p>{product.title2}</p>
                                <p>{product.title3}</p>
                            </div>
                        </div>
                    </section>
                </main >
            }
        </>
    );
}