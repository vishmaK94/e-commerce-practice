import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Apple",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dicta!",
    price: "$2000",
    image: "https://source.unsplash.com/random",
  },
  {
    id: 2,
    name: "Buffalo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dicta!",
    price: "$90",
    image: "https://source.unsplash.com/random",
  },
  {
    id: 3,
    name: "Clarinet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dicta!",
    price: "$5000",
    image: "https://source.unsplash.com/random",
  },
  {
    id: 4,
    name: "Dell",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dicta!",
    price: "$1000",
    image: "https://source.unsplash.com/random",
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container spacing={4} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
