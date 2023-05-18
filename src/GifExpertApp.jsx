import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
import { Button, Stack } from "react-bootstrap";

export const GifExpertApp = () => {

    let [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    const Clean = () => {
        categories = []
        setCategories([...categories]);
    }

    const Delete = () => {
        categories.shift()
        setCategories([...categories]);
    }

    return (
        <>
            <div className="container">
                <div>
                    <h1>
                        GifExpertApp
                    </h1>
                </div>


                <AddCategory
                    onNewCategory={(value) => onAddCategory(value)}
                />

                <Stack className="m-4" direction="horizontal" gap={2}>
                    <Button onClick={Clean} variant="danger">
                        Limpiar
                    </Button>
                    <Button onClick={Delete} variant="warning">
                        Eliminar
                    </Button>
                </Stack>

                {
                    categories.map((category) => (
                        <GifGrid
                            key={category}
                            category={category} />
                    ))
                }

            </div>
        </>
    )
}

