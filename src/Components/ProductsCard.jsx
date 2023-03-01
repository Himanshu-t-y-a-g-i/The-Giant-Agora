import React from "react";
import {
    Box,
    Text,
    Image,
    Button,
    Flex,
    Spacer,
} from "@chakra-ui/react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export const ProductsCard = ({ id, image, price, brand, name }) => {
    return (
        <Flex

            spacing={4}
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >
            <Flex padding={"7%"} direction={"column"} height={"100%"} align={"space-between"} >
                <Box>
                    <Image
                        src={image}
                        margin="auto"
                        alt={id}
                    />
                </Box>
                <Box>
                    <Text
                        fontWeight="semibold"
                        marginTop={2}
                        id={"nameStyle"}
                    >
                        {name}
                    </Text>
                    <Text fontWeight="bold" marginTop={2}>
                        {brand}
                    </Text>
                </Box>
                <Box>
                    <Text fontWeight="semibold" marginTop={2}>
                        Price: {price}
                    </Text>
                </Box>
                <Spacer />
                <Box mt="15px">
                    <Link to={`/product/${id}`}>
                        <Button
                            background={"cyan.400"}
                            width={"100%"}
                            _hover={{
                                transform: "scale(1.1)",
                                color: "black",
                            }}
                        >
                            View
                        </Button>
                    </Link>
                </Box>
            </Flex>
        </Flex>
    );
};
