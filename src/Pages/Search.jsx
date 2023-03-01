import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { Sidebar } from "../Components/Sidebar";
import { useLocation, useSearchParams, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getBrands, searchData } from "../Redux/AppReducer/action";

export const Search = () => {
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const [urlBrands, setUrlBrands] = useState([]);
    const dispatch = useDispatch();
    const { query } = useParams();
    const data = useSelector(store => store.productReducer.products);
    const loading = useSelector(store => store.productReducer.isLoading);
    const error = useSelector(store => store.productReducer.isError);
    console.log(query)
    const paramsObj = {
        params: {
            brand: searchParams.getAll("brand"),
            _sort: searchParams.get("order") && "MRP",
            _order: searchParams.get("order")
        }
    }
    useEffect(() => {
        dispatch(searchData(query, paramsObj));
        getBrands(undefined, query, setUrlBrands);
    }, [location.search, query]);
    return (
        <Grid templateColumns={"1fr 6fr"}>
            <Sidebar data={urlBrands} />
            <Box padding={"2%"}>
                {loading && <div style={{ textAlign: "center", position: "absolute", top: "45vh", left: "45vw" }}>
                    <img style={{ margin: "auto" }} width={"100px"} src="https://i.ibb.co/3mVT24P/137894-loading.gif" alt="https://i.ibb.co/3mVT24P/137894-loading.gif" />
                    <Text fontSize={"4xl"}>Loading Products.....</Text>
                </div>}
                {error && <div style={{ textAlign: "center", position: "absolute", top: "30vh", left: "45vw" }}>
                    <img style={{ margin: "auto", borderRadius: "30px" }} width={"400px"} src="https://i.ibb.co/L6pZv8q/106720-404-page.gif" alt="https://i.ibb.co/L6pZv8q/106720-404-page.gif" />
                    <Text fontSize={"4xl"}>Something went wrong!</Text>
                </div>}
                {!loading && !error && data.map(e => {
                    return (
                        <Grid mb={"30px"} borderRadius={"20px"} _hover={{ boxShadow: "0px 0px 15px 1px rgb(203, 203, 203)" }} templateColumns={"1fr 5fr"} padding={"2%"} gap={"2%"} key={e.id}>
                            <Link to={`/search/${query}/${e.id}`}><Image src={e.imglink} cursor="pointer" /></Link>
                            <Flex direction={"column"} >
                                <Link to={`/search/${query}/${e.id}`}><Text _hover={{ color: "rgb(64, 64, 64)" }} cursor={"pointer"} fontWeight={"bold"} fontSize={"2xl"}>{e.name}</Text></Link>
                                <Text fontSize={"xl"} fontWeight={"medium"} >{e.brand}</Text>
                                <Text fontSize={"2xl"}><s>{e.MRPx}</s> <i>{e.discountx} OFF</i> </Text>
                                <Text fontWeight={"medium"} color={"red.600"} fontSize={"2xl"}>{e.dealpricex} </Text>
                            </Flex>
                        </Grid>
                    )
                })}
            </Box>
        </Grid>
    )
}