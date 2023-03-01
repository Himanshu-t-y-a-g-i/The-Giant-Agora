import {
    Box,
    Checkbox,
    Flex,
    Heading,
    Radio,
    RadioGroup,
    VStack,
} from "@chakra-ui/react";
import "./Sidebar.css"

import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Sidebar = ({ data }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initState = searchParams.getAll("brand");
    const initOrder = searchParams.get("order");
    const [order, setOrder] = useState(initOrder || "");
    const [brands, setBrands] = useState([]);
    const [urlBrands, urlSetBrands] = useState(initState || []);
    const handleSortPrice = (e) => {
        setOrder(e.target.value);
    }
    const handleChange = (e) => {
        let value = e.target.value;
        let newBrands = [...urlBrands];
        if (newBrands.includes(value)) {
            newBrands.splice(newBrands.indexOf(value), 1);
        } else {
            newBrands.push(value);
        }
        urlSetBrands(newBrands);
    }
    useEffect(() => {
        const obj = {};
        data.map((e) => {
            if (e.brand) {
                obj[e.brand] = 1;
            }
        });
        const brandArr = [];
        for (let key in obj) {
            brandArr.push(key);
        }
        setBrands(brandArr);

        let params = {
            brand: urlBrands
        }

        order && (params.order = order)

        setSearchParams(params)
    }, [data, urlBrands, order]);
    return (
        <>
            <Box id="outerBox">
                <Box
                    overflow={"scroll"}
                    height={"100vh"}
                    bg="gray.100"
                    boxShadow="lg"
                    position={"sticky"}
                    top={"0px"}
                >
                    <Heading marginTop={"20px"} fontSize="2xl" textColor={"cyan.800"}>
                        Filter
                    </Heading>
                    <Box overflow={"scroll"} height={"60vh"}>
                        <Heading
                            textAlign={"left"}
                            marginTop="10px"
                            marginBottom={"10px"}
                            fontSize={"xl"}
                            textColor={"gray.500"}
                        >
                            Brands
                        </Heading>
                        {brands.length > 0 &&
                            brands.map((e) => {
                                return (
                                    <Flex key={Math.random()} ml="20px" mb="1rem" alignItems="flex-start">
                                        <Checkbox onChange={handleChange} isChecked={urlBrands.includes(e)} value={e} size={"lg"} borderColor="blue.500">
                                            {e}
                                        </Checkbox>
                                    </Flex>
                                );
                            })}
                    </Box>
                    <Box bg="gray.100">
                        <Heading
                            fontSize={"xl"}
                            textColor={"gray.500"}
                            mb="1.5rem"
                            marginTop={"30px"}
                        >
                            Sort By Price
                        </Heading>
                        <RadioGroup defaultValue={order}>
                            <VStack align={"left"} ml="20px">
                                <Radio borderColor="blue.500" onChange={handleSortPrice} name="order" value="asc" size="lg">
                                    Low to High
                                </Radio>
                                <Radio borderColor="blue.500" onChange={handleSortPrice} name="order" value="desc" size="lg">
                                    High to Low
                                </Radio>
                            </VStack>
                        </RadioGroup>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
