import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Web3Modal from "web3modal";
import NFT from "../engine/NFT.json";
import Market from "../engine/Market.json";
import { nftcreator, marketcontract } from "../engine/configuration";
import {
  Card,
  Button,
  Input,
  Col,
  Row,
  Spacer,
  Container,
  Text,
} from "@nextui-org/react";
import "sf-font";
import { NFTStorage, File } from "nft.storage";

export default function CreateMarket() {
  const [fileUrl, setFileUrl] = useState(null);
  const [up, setUp] = useState(null);
  const [formInput, updateFormInput] = useState({
    price: "",
    name: "",
    description: "",
  });

  useEffect(() => {}, []);

  const router = useRouter();

  async function uploadMetadata(name, description, file) {
    const client = new NFTStorage({ token: process.env.NFT_STORE_API_KEY });
      const metadata = await client.store({
        name,
        description,
        image: file,
      });
    
    setFileUrl(ipfsToHttp(metadata.url));
    if (fileUrl)
      setUp(true);
  }

  const ipfsToHttp = (url) => {
    return url.replace("ipfs://", "https://ipfs.io/ipfs/");
  };

  async function onChange(e) {
    const uploadedFile = e.target.files[0];
    const { name, description, price } = formInput;
    const reader = new FileReader();

    const onLoadPromise = new Promise((resolve) => {
      reader.onload = (e) => {
        resolve(e.target.result);
      };
    });

    reader.readAsArrayBuffer(uploadedFile);
    const fileBuffer = await onLoadPromise;
    const fileObject = new File(
      [new Uint8Array(fileBuffer)],
      uploadedFile.name,
      {
        type: uploadedFile.type,
      }
    );

    await uploadMetadata(name, description, fileObject);
  }

  const getMetaData = async (url) => {
    const metaData = fetch(url)
      .then((response) => response.json());

    return metaData;
  };

  async function createMarket() {
    const { name, description, price } = formInput;
    if (!name || !description || !price || !fileUrl) return;

    try {
      const meta = await getMetaData(fileUrl);
      console.log(fileUrl);
      console.log(meta);
      createNFT(fileUrl);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  async function createNFT(url) {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    let contract = new ethers.Contract(nftcreator, NFT, signer);
    let transaction = await contract.createNFT(url);
    let tx = await transaction.wait();
    let event = tx.events[0];
    let value = event.args[2];
    let tokenId = value.toNumber();
    const price = ethers.utils.parseUnits(formInput.price, "ether");
    contract = new ethers.Contract(marketcontract, Market, signer);
    let listingFee = await contract.getListingFee();
    listingFee = listingFee.toString();
    transaction = await contract.createVaultItem(nftcreator, tokenId, price, {
      value: listingFee,
    });
    await transaction.wait();
    router.push("/");
  }

    async function buyNFT() {
      const { name, description } = formInput
      if (!name || !description || !fileUrl) return
      const data = JSON.stringify({
          name, description, image: fileUrl
      })
      try {
          const added = await client.add(data)
          const url = `https://ipfs.io/ipfs/${added.path}`
          mintNFT(url)
      } catch (error) {
          console.log('Error uploading file: ', error)
      }
  }

  async function mintNFT(url) {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    let contract = new ethers.Contract(nftcreator, NFT, signer);
    let cost = await contract.cost();
    let transaction = await contract.mintNFT(url, { value: cost });
    await transaction.wait();
    router.push("/portal");
  }

  return (
    <div>
      <Spacer></Spacer>
      <Container
        lg
        gap={2}
        css={{ fontFamily: "SF Pro Display", fontWeight: "200" }}
      >
        <Text h2>NFT Creator Portal</Text>
        <Row gap={4}>
          <Col css={{ marginRight: "$7" }}>
            <Spacer></Spacer>
            <Card css={{ marginTop: "$5", marginBottom: "$5" }}>
              <Card.Body style={{ backgroundColor: "#white" }}>
                <Text>
                  Choose your Preferred Network and unleash your creativity by uploading your unique 
                  artwork through our user-friendly NFT Dashboard. It's hassle-free and straightforward!
                </Text>
              </Card.Body>
            </Card>
            <img
              alt="alchemy logo"
              src="alchemy-black.svg"
              style={{ maxWidth: "300px" }}
            />
            <Card css={{ marginTop: "$5" }}>
              <Card.Body style={{ backgroundColor: "White" }}>
                <Text>
                  Experience the convenience and security of Alchemy's SDK-powered Simplified Web3 Marketplace. 
                  Discover a seamless platform that empowers creators and collectors alike.
                </Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Spacer></Spacer>
            <Text h3>Create and Sell your NFT in the Marketplace.</Text>
            <Text h3>Please wait for img upload confirmation.</Text>
            <Text h3>Smaller images preferred.</Text>
            <Card
              style={{
                maxWidth: "300px",
                background: "white",
                boxShadow: "0px 0px 5px #ffffff60",
              }}
            >
              <Card css={{ marginTop: "$1" }}>
                <Card.Body style={{ backgroundColor: "white" }}>
                  <Input
                    placeholder="Enter your NFT Name"
                    aria-label="Enter your NFT Name"
                    onChange={(e) =>
                      updateFormInput({ ...formInput, name: e.target.value })
                    }
                  />
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Input
                    placeholder="NFT Description"
                    aria-label="NFT Description"
                    onChange={(e) =>
                      updateFormInput({
                        ...formInput,
                        description: e.target.value,
                      })
                    }
                  />
                </Card.Body>
              </Card>
              <Card>
                <Card.Body style={{ backgroundColor: "white" }}>
                  <input type="file" name="Asset" onChange={onChange} />
                  {fileUrl && "Uploaded ☑️"}
                </Card.Body>
              </Card>
              <Container css={{ marginBottom: "$2" }}>
                <Input
                  css={{ marginTop: "$2" }}
                  placeholder="Set your price in MATIC"
                  aria-label="Set your price in MATIC"
                  onChange={(e) =>
                    updateFormInput({ ...formInput, price: e.target.value })
                  }
                />
                <Button
                  size="sm"
                  style={{ fontSize: "20px" }}
                  onPress={createMarket}
                  css={{
                    marginTop: "$2",
                    marginBottom: "$5",
                    color: "$gradient",
                  }}
                  disabled={!fileUrl}
                >
                  List your NFT!
                </Button>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
