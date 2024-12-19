import { getImageUrl } from "./utils";

interface Person{
    name:string;
    imageId:string;
}

interface AvatarProps{
    person:Person;
    size:number;
}

interface CardProps{
    children:React.ReactNode;
}
export default function Profile() {
    return (
        <Card>
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
        </Card>
    );
}


/*ใช้งาน getImageUrl(person) ในการสร้าง URL ของรูป
และข้อความแสดงแทนในส่วนของ ALT ในกรณีที่ภาพไม่แสดง*/
function Avatar({ person, size }:AvatarProps){
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

function Card({ children }:CardProps) {
    return (
        <div className="card">
            {children}
        </div>
    );
}


/*Profile เรียกใช้งาน Card และส่งข้อมูล Avatar ที่เป็น Children
    Avatar ใช้ข้อมูลของ Person และ size ส้ราง IMG จาก getImageURL*/