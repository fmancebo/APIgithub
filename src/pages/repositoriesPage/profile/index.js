import React from "react";
import PropTypes from "prop-types";
import { MdGroup, MdLocationCity, MdWork, MdLink } from "react-icons/md";

import {
  Container,
  Header,
  AvatarContainer,
  Avatar,
  Login,
  Name,
  Inner,
  Data,
} from "./styles";

function Profile({ user }) {
  return (
    <Container>
      <Header>
        <AvatarContainer>
          <Avatar src={user.avatar_url} />
        </AvatarContainer>
        <Login>{user.login}</Login>
        <Name>{user.name}</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          {user.following}&nbsp;<i>seguidores</i>&nbsp; &middot; &nbsp;
          {user.followers}&nbsp;
          <i>seguindo</i>
        </Data>
        {user.company && (
          <Data>
            <MdWork size={20} />
            <a
              target="_black"
              rel="noopener noreferrer"
              href={`${user.company}`}
            >
              {user.company}
            </a>
          </Data>
        )}
        {user.location && (
          <Data>
            <MdLocationCity size={20} />
            {user.location}
          </Data>
        )}
        {user.blog && (
          <Data>
            <MdLink size={20} />
            <a target="_black" rel="noopener noreferrer" href={`${user.blog}`}>
              {user.blog}
            </a>
          </Data>
        )}
      </Inner>
    </Container>
  );
}
Profile.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string,
    blog: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};

export default Profile;
