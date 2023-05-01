import { Button, Flex, Grid, HStack, Image, Text } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { deleteDataF, getDataF } from "../Redux/AdminReducer/action";
import { useNavigate } from "react-router-dom";

export const AdminCard = ({ data }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <Flex flexDir={"column"} justify={"space-between"} gap={"10px"} id="adminCard" _hover={{ boxShadow: "0px 0px 15px rgb(220, 220, 220)", border: "none" }} transition={".5s"} padding={"10px"} border={"1px solid rgb(208, 208, 208)"} overflow={"hidden"} borderRadius={"20px"}>
            <Image src={data.imglink} alt="Image" transition=".5s" _hover={{ transform: "scale(1.1)" }} />
            <Text align={"center"} fontSize={"2xl"} fontWeight={"medium"}>{data.brand}</Text>
            <Text>{data.name}</Text>
            <HStack>
                <Text fontSize={"20px"} color={"red.600"}>{data.dealpricex}</Text>
                <Text><strike>{data.MRPx}</strike></Text>
            </HStack>
            <Text>{data.savepricex} Off</Text>
            <Grid gap={"10px"} templateColumns={"1fr 1fr"}>
                <Button onClick={() => navigate(`/edit/${data.id}`)} _hover={{ color: "white", background: "aqua" }}>Edit</Button>
                <Button onClick={() => { dispatch(deleteDataF(data.id)) }} _hover={{ color: "white", background: "red" }}>Delete</Button>
            </Grid>
        </Flex >
    )
}