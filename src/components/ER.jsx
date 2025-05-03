import React from "react";
import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";
import { FaMapMarkerAlt, FaUser, FaTag, FaClock } from "react-icons/fa";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
`;

const EventCard = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  padding: 20px;
  margin-top: 30px;
  background-color: antiquewhite;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const EventContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Event = ({ name, location, speaker, type, time }) => (
  <EventCard>
    <h2>{name}</h2>
    <p><FaMapMarkerAlt /> Место: {location}</p>
    <p><FaUser /> Спикер: {speaker}</p>
    <p><FaTag /> Тип: {type}</p>
    <p><FaClock /> Время: {time.start} - {time.end}</p>
  </EventCard>
);

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  time: PropTypes.shape({
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
  }).isRequired,
};

class EventsRender extends React.Component {
  render() {
    return (
      <EventContainer>
        <GlobalStyle />
        {this.props.arr.map(event => (
          <Event key={event.name} {...event} />
        ))}
      </EventContainer>
    );
  }
}

export default EventsRender;