import { useRef } from "react"
import styles from "./ContactPage.module.scss"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
})

const CONTACT_INFO = [
    { label: "E-mail", value: "indiraptor63983@gmail.com" },
    { label: "Address", value: "Chydnyvska 103, Zhytomyr" },
    { label: "Phone", value: "+3801234567" },
    { label: "Active support time", value: "9 a.m. – 5 p.m." },
    { label: "Telegram", value: "@SibahstatS" },
] as const

export default function ContactPage() {
    const mapWrapperRef = useRef<HTMLDivElement | null>(null)

    return <div className="container">
        <div className={styles.contactBlock}>
            <div
                ref={(node) => {
                    if (node !== null) {
                        const leafletNode = node as HTMLDivElement & { _leaflet_id?: number | null }
                        if (leafletNode._leaflet_id) {
                            leafletNode._leaflet_id = null
                        }
                    }
                    mapWrapperRef.current = node
                }}
                style={{
                    height: "400px",
                    width: "100%",
                    minWidth: "300px",
                    flex: "1 1 auto",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <MapContainer
                    center={[50.244722, 28.637305]}
                    zoom={12}
                    style={{ height: "100%", width: "100%" }}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[50.244722, 28.637305]}>
                        <Popup>We are here!</Popup>
                    </Marker>
                </MapContainer>
            </div>
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <td className={styles.header} colSpan={2}><h2>Contacts</h2></td>
                    </tr>
                    {CONTACT_INFO.map(({ label, value }, i) => (
                        <tr
                            key={label}
                            className={i === CONTACT_INFO.length - 1 ? styles.lastRow : undefined}
                        >
                            <th scope="row">{label}</th>
                            <td>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
}