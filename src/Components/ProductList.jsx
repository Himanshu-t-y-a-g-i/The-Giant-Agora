import { Box, Card, Flex, Grid } from "@chakra-ui/react";
import { ProductsCard } from "./ProductsCard";

export const ProductList = ({ data }) => {
    return (
        <Flex>
            <Box>
                <Grid m={"2%"} gap={"2%"} templateColumns={{ sm: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)', xl: 'repeat(4,1fr)' }}>
                    {data &&
                        data.map((el) => {
                            return (
                                <Card
                                    _hover={{
                                        boxShadow: "2xl",
                                    }}
                                    key={el.id}
                                >
                                    <ProductsCard
                                        id={el.id}
                                        image={el.imglink}
                                        name={el.name}
                                        price={el.MRPx}
                                        brand={el.brand}
                                    />
                                </Card>
                            );
                        })}
                </Grid>
            </Box>
        </Flex>
    )
}