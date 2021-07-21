import React from "react";
import { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
const Item = ({ database }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const databasePromise = new Promise((resolve, reject) => {
        let status = 200;
        if (status === 200) {
          resolve(database);
        } else {
          reject("error loading database");
        }
      });

      databasePromise
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return error;
        });

      const getDatabase = () => {
        return databasePromise;
      };

      getDatabase()
        .then((response) => {
          setProducts(response);
        })
        .catch((error) => {
          return error;
        });
    }, 1000);
  }, [database]);

  const handleCount = (count) => {
    alert(`You added ${count}`);
  };

  console.log(products);

  return (
    <Row className="justify-content-center">
      {products.map(({ id, name, description, price, image }) => (
        <>
          <Col className="m-2" key={id} sm={6} xs={12} lg={2}>
            <Card>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  <p>
                    {description
                      .toLowerCase()
                      .split(" ")
                      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                      .join(" ")}
                  </p>
                  <span>Precio: ${price}</span>
                </Card.Text>
              </Card.Body>
              <ItemCount stock={5} initial={1} onAdd={handleCount} />
            </Card>
          </Col>
        </>
      ))}
    </Row>
  );
};

export default Item;
