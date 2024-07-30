import styled from "styled-components";

const NavWrapper=styled.div`
    margin-left: 10px;
    font-size: 20px;
    &>a{
        text-decoration: none;
        color: #1e3786;
    }
    &>a.active{
        text-decoration: none;
        color: #03eaff;
    }
    &>a:hover{
        color: steelblue;
    }
`
const PictureWrapper = styled.ul`
  display: flex;
  & li {
    margin-right: 20px;
    list-style-type: none;
  }
  & a {
    text-decoration: none;
    color: #fff;
  }
`

const Picture = styled.img`
  max-width: 350px;
  width: 100%;
  height: auto;
`

const ModelWrapper = styled.div`
  padding: 0 20px;
`

export const S = {
    NavWrapper, Picture, PictureWrapper, ModelWrapper
}