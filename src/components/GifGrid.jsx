import { useEffect, useState } from "react"
import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs";
import { Button, Card, CardGroup, Col, Row } from "react-bootstrap";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <CardGroup>
                    {
                        images.map((image) => (
                            <GifItem
                                key={image.id}
                                {...image}
                            />
                        ))
                    }
            </CardGroup>
        </>
    )
}