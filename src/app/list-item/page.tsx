import '../globals.css'

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

export default function list() {
    const listItems = products.map(product =>
        <li
            key={product.id}
            style={{
                color: product.isFruit ? 'magenta':'darkgreen'
            }}//การใช้งานคือ True = magenta และ false = darkgreen ตามลำดับ
        >
            {product.title}
        </li>
    )
    return (
        <>
            <h1>list page</h1>
            <ul>{listItems}</ul>
        </>
    )
}