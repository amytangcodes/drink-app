import React, { Component } from "react";
import {
  Container,
  Header,
  Segment,
  Button,
  Icon,
  Dimmer,
  Loader,
  Divider,
} from "semantic-ui-react";
class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.getDrinks = this.getDrinks.bind(this);
    this.getDrink = this.getDrink.bind(this);
  }

  componentDidMount() {
    this.getDrinks();
  }

  fetch(endpoint) {
    return (
      window
        .fetch(endpoint)
        .then((res) => res.json())
        // .then((json) => console.log(json))
        .catch((err) => console.log(err))
    );
  }

  getDrinks() {
    this.fetch("/api/drinks").then((drinks) => {
      if (drinks.length) {
        this.setState({ drinks: drinks });
        this.getDrink(drinks[0].id);
      } else {
        this.setState({ drinks: [] });
      }
    });
  }

  getDrink(id) {
    this.fetch(`/api/drinks/${id}`).then((drink) => {
      console.log(id);
      console.log(drink) ;
      this.setState({ drink: drink });
    });
  }

  render() {
    let { drinks, drink } = this.state;
    console.log(drink);
    return drinks ? (
      <Container text>
        <Header as="h2" icon textAlign="center" color="teal">
          <Icon name="unordered list" circular />
          <Header.Content>List of Ingredients</Header.Content>
        </Header>
        <Divider hidden section />
        {drinks && drinks.length ? (
          <Button.Group color="teal" fluid widths={drinks.length}>
            {Object.keys(
              drinks.map((key) => {
                return;
                <Button
                  active={drink && drink.id === drinks[key].id}
                  fluid
                  key={key}
                  onClick={() => this.getDrink(drinks[key].id)}
                >
                  {drinks[key].title}
                </Button>;
              })
            )}
          </Button.Group>
        ) : (
          <Container textAlign="center"></Container>
        )}
        <Divider section />
        {drink && (
          <Container>
            <Header as="h2">{drink.title}</Header>
            {drink.description && <p>{drink.description}</p>}
            {drink.ingredients && (
              <Segment.Group>
                {drink.ingredients.map((ingredient, i) => (
                  <Segment key={i}>{ingredient.description}</Segment>
                ))}
              </Segment.Group>
            )}
            {drink.steps && <p>{drink.steps}</p>}
            {drink.source && (
              <Button basic size="tiny" color="teal" href={drink.source}>
                Source
              </Button>
            )}
          </Container>
        )}
      </Container>
    ) : (
      <Container text>
        <Dimmer active inverted>
          <Loader content="Loading" />
        </Dimmer>
      </Container>
    );
  }
}
export default App;
