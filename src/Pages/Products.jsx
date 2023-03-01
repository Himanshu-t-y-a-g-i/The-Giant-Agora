import { Box, Grid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams, useParams } from "react-router-dom";
import { ProductList } from "../Components/ProductList";
import { Sidebar } from "../Components/Sidebar";
import { getBrands, getProduct } from "../Redux/AppReducer/action";

export const Products = () => {
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const [urlBrands, setUrlBrands] = useState([]);
    const dispatch = useDispatch();
    const AllCategory = useParams();
    const category = AllCategory.product;
    const data = useSelector((store) => {
        return store.productReducer.products;
    });
    const loading = useSelector(store => store.productReducer.isLoading);
    const error = useSelector(store => store.productReducer.isError);

    const paramsObj = {
        params: {
            brand: searchParams.getAll("brand"),
            _sort: searchParams.get("order") && "MRP",
            _order: searchParams.get("order")
        }
    }
    useEffect(() => {
        dispatch(getProduct(category, paramsObj));
        getBrands(category,"", setUrlBrands);
    }, [location.search, category]);
    return (
        <>
            <Grid templateColumns={"1fr 6fr"}>
                <Sidebar data={urlBrands} />
                <Box>
                    {loading && <div style={{ textAlign: "center", position: "absolute", top: "45vh", left: "45vw" }}>
                        <img style={{ margin: "auto" }} width={"100px"} src="https://i.ibb.co/3mVT24P/137894-loading.gif" alt="https://i.ibb.co/3mVT24P/137894-loading.gif" />
                        <Text fontSize={"4xl"}>Loading Products.....</Text>
                    </div>}
                    {error && <div style={{ textAlign: "center", position: "absolute", top: "30vh", left: "45vw" }}>
                        <img style={{ margin: "auto", borderRadius: "30px" }} width={"400px"} src="https://i.ibb.co/L6pZv8q/106720-404-page.gif" alt="https://i.ibb.co/L6pZv8q/106720-404-page.gif" />
                        <Text fontSize={"4xl"}>Something went wrong!</Text>
                    </div>}
                    {!loading && !error && <ProductList data={data} />}
                </Box>
            </Grid>
        </>
    );
}
