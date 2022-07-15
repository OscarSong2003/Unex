import React, { useEffect, useState } from "react";
import LoadingPage from "../standard/Loading";
import PageLayout from "../standard/PageLayout";
import api from "../utils/api";
import {
    Flex,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Heading,
    Text,
    Spacer
} from "@chakra-ui/react";
import NavBar from "../standard/NavBar";
import TopExpenditure from "./TopExpenditure";
import Footer from "../standard/Footer";

type TopSpendDetailsProps = {
    userEmail: string,
}

export type CategoryInfo = {
    category: string,
    amount: number
}

export type EntryInfo = {
    amount: number, 
    date: Date,
    name: string,
}

const TopSpendDetails = ({ userEmail } : TopSpendDetailsProps): React.ReactElement => {
    const [ topSpendCat, setTopSpendCat ] = useState<CategoryInfo[]>([]);
    const [ cat1Entries, setCat1Entries ] = useState<EntryInfo[]>([]);
    const [ cat2Entries, setCat2Entries ] = useState<EntryInfo[]>([]);
    const [ cat3Entries, setCat3Entries ] = useState<EntryInfo[]>([]);
    const [ cat4Entries, setCat4Entries ] = useState<EntryInfo[]>([]);
    const [ currentDate, setCurrentDate] = useState(new Date());
    const [ catSet, setCatSet ] = useState(false)

    useEffect(() => {
        getTopCategories();
    }, []);

    useEffect(() => {
        getExpensesByCategory();
    }, [topSpendCat]);

    const getTopCategories = async () => {
        if (userEmail) {
            await api.get(`/user/topSpendCat`, {params: { email: userEmail }})
            .then((res:any) => { 
                const body = res.data; 
                // console.log('body', body)
                let categoryInfo:CategoryInfo[] = [];
                for (let i of body) {
                    categoryInfo.push({
                        category: i.name,
                        amount: i.val
                    });
                }
                setTopSpendCat(categoryInfo);
             })
            .catch((err:Error) => { console.log(err) })
        } 
    }

    const getExpensesByCategory = async () => {
        let entries: any[] = [];
        for (let catInfo of topSpendCat) {
            await api.get('/exp/byCategory',  {params: { email: userEmail, category: catInfo.category }})
            .then((res:any) => {
                const body = res.data; 
                // console.log('data back' ,body);
                entries.push(body.entries);
                // console.log('entries', entries);
            }).catch((err:Error) => { console.log(err) })
        }
        console.log('entries outside', entries);
        // get entry into states
        setCat1Entries(entries[0]);
        // console.log('cat1Entries', cat1Entries);
        setCat2Entries(entries[1]);
        // console.log('cat2Entries', cat2Entries);
        setCat3Entries(entries[2]);
        // console.log('cat3Entries', cat3Entries);
        setCat4Entries(entries[3]);
        // console.log('cat4Entries', cat4Entries);
        if (entries.length == 4)
            setCatSet(true);
        // console.log('end', topSpendCat);
    }

    if (catSet) {
        return ( 
            <PageLayout >
                <NavBar />
                 <Flex 
                  h="500px"
                  direction="row"
                  alignItems="top"
                  justifyContent="center"
                  mt="30px"
                  bg="gray.300"
                  borderColor="gray.100"
                  pt="40px"
                  ml="20px"
                  mr="30px"
                  >
                    <TopExpenditure left={true} categoryInfo={topSpendCat[0]} catEntries={cat1Entries} />
                    <TopExpenditure left={false} categoryInfo={topSpendCat[1]} catEntries={cat2Entries} />
                  </Flex>
                  <Flex 
                  h="500px"
                  direction="row"
                  alignItems="top"
                  justifyContent="center"
                  mt="30px"
                  bg="gray.300"
                  borderColor="gray.100"
                  pt="40px"
                  ml="20px"
                  mr="30px">
                    <TopExpenditure left={true} categoryInfo={topSpendCat[2]} catEntries={cat3Entries} />
                    <TopExpenditure left={false} categoryInfo={topSpendCat[3]} catEntries={cat4Entries} />
                  </Flex>
            <Footer marginTop="20px"/>
            </PageLayout>
        )
    } else {
        return (
            <LoadingPage />
        )
    }

}

export default TopSpendDetails;