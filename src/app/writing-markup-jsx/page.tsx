export default function Todolist() {
    return (/*ใน่สวนของการส้ราง components นั้น
        เราสามารถใช้งาน <></>ได้แมนการใช้งาน div หรือ section และอีกหลายตัวแทนได้
        เพื่อลดความซับซ้อนของ div หรือ ส่วนโครงสร้างต่างๆของ HTML ได้
        */
        <>
            <h1>Hedy Lamarr's Todos</h1>
            <img
                src="https://i.imgur.com/yXOvdOSs.jpg"
                alt="Hedy Lamarr"
                className="photo"
            />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve spectrum technology</li>
            </ul>
        </>
    )
}