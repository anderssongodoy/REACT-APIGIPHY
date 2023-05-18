import { Card, Col, Row } from "react-bootstrap"

export const GifItem = ({ title, url }) => {
    return (
        <Card>
            <Card.Img variant="top" src={url} alt={title} style={{width: '100%', height: '100%'}}/>
            <Card.Footer>
                <small className="text-muted">{title}</small>
            </Card.Footer>
        </Card>
    )
}