import { useRouter } from "next/router";

export default function Product() {

    const router = useRouter();
    const {productId} = router.query;

    return (
        <div>
            <h1>Product id: {productId}</h1>
        </div>
    )
}