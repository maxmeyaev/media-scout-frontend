/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import React from 'react';
// import Carousel from 'react-material-ui-carousel';
// import Item from './Item';
// import dummy from '../helper/dummy.json';

// const styleCarousel = {
//   width: '500px',
//   height: '28px',
//   padding: '5px'
// };

// function Example () {
//   return (
//     <Carousel style={styleCarousel}>
//       {
//         dummy.map(item => <Item key={item.id} item={item} />)
//       }
//     </Carousel>
//   );
// }
// export default Example;
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import '../index.css';
// import autoBind from 'auto-bind';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button
} from '@mui/material';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';

function Banner (props) {
  if (props.newProp) console.log(props.newProp);
  const contentPosition = props.contentPosition
    ? props.contentPosition
    : 'left';
  const totalItems = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  const items = [];
  const content = (
    <Grid item xs={12 / totalItems} key="content">
      <CardContent className="Content">
        <Typography className="Title">{props.item.Name}</Typography>

        <Typography className="Caption">{props.item.Caption}</Typography>

        <Button variant="outlined" className="ViewButton">
          View Now
        </Button>
      </CardContent>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={12 / totalItems} key={item.Name}>
        <CardMedia className="Media" image={item.Image} title={item.Name}>
          <Typography className="MediaCaption">{item.Name}</Typography>
        </CardMedia>
      </Grid>
    );

    items.push(media);
  }

  if (contentPosition === 'left') {
    items.unshift(content);
  } else if (contentPosition === 'right') {
    items.push(content);
  } else if (contentPosition === 'middle') {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card raised className="Banner" style={{ height: '80vh' }}>
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  );
}

const items = [
  {
    Name: 'Popular Now',
    Image: '',
    contentPosition: 'left',
    Items: [
      {
        Name: 'The Last of Us',
        Image: 'https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_.jpg'
      },
      {
        Name: 'John Wick: Chapter 4',
        Image: 'data:image/jpeg;base64,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'
      }
    ]
  },
  {
    Name: 'Documentaries',
    contentPosition: 'left',
    Items: [
      {
        Name: 'Dirty Money',
        Image: 'https://m.media-amazon.com/images/M/MV5BNTZjOTI2N2MtYjU0OC00YzFlLWIxNzQtYzY3MjgyOTU0MDJhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg'
      },
      {
        Name: 'Our Universe',
        Image: 'https://m.media-amazon.com/images/M/MV5BYmQ2OGFiODktMjg4Yi00ZDAzLWJkNjAtMTQyMzNlN2JkNzIyXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg'
      }
    ]
  },
  {
    Name: 'Kids',
    contentPosition: 'left',
    Items: [
      {
        Name: 'Frozen',
        Image: 'https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_.jpg'
      },
      {
        Name: 'MY NEIGHBOR TOTORO',
        Image: 'https://m.media-amazon.com/images/M/MV5BYzJjMTYyMjQtZDI0My00ZjE2LTkyNGYtOTllNGQxNDMyZjE0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg'
      }
    ]
  }
];

class BannerExample extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      autoPlay: true,
      animation: 'fade',
      indicators: true,
      timeout: 500,
      navButtonsAlwaysVisible: false,
      navButtonsAlwaysInvisible: false,
      cycleNavigation: true
    };

    // autoBind(this);
  }

  toggleAutoPlay () {
    this.setState({
      autoPlay: !this.state.autoPlay
    });
  }

  toggleIndicators () {
    this.setState({
      indicators: !this.state.indicators
    });
  }

  toggleNavButtonsAlwaysVisible () {
    this.setState({
      navButtonsAlwaysVisible: !this.state.navButtonsAlwaysVisible
    });
  }

  toggleNavButtonsAlwaysInvisible () {
    this.setState({
      navButtonsAlwaysInvisible: !this.state.navButtonsAlwaysInvisible
    });
  }

  toggleCycleNavigation () {
    this.setState({
      cycleNavigation: !this.state.cycleNavigation
    });
  }

  changeAnimation (event) {
    this.setState({
      animation: event.target.value
    });
  }

  changeTimeout (event, value) {
    this.setState({
      timeout: value
    });
  }

  render () {
    return (
      <div style={{ marginTop: '50px', color: '' }}>

        <Carousel
          className="Example"
          autoPlay={this.state.autoPlay}
          animation={this.state.animation}
          indicators={this.state.indicators}
          timeout={this.state.timeout}
          cycleNavigation={this.state.cycleNavigation}
          navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
          navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
          next={(now, previous) =>
            console.log(
              `Next User Callback: Now displaying child${now}. Previously displayed child${previous}`
            )
          }
          prev={(now, previous) =>
            console.log(
              `Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`
            )
          }
          onChange={(now, previous) =>
            console.log(
              `OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`
            )
          }
          // fullHeightHover={false}
          // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
          // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
          // indicatorContainerProps={{style: {margin: "20px"}}}
          // NextIcon='next'
        >
          {items.map((item, index) => {
            return (
              <Banner
                item={item}
                key={index}
                contentPosition={item.contentPosition}
              />
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default BannerExample;
