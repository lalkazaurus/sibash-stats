import { Link } from "react-router-dom";

export default function NotExists() {
    return <><h2>Такої сторінки не існує</h2><Link to={"/"}>Повернутись назад</Link></>
}