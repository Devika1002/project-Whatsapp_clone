
import { Box } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { InputBase, styled } from '@mui/material';


const Component = styled(Box)`
    background: #fff;
    height: 45px;
    border-bottom: 1px solid #ededed;
    display: flex;
    align-items: center;
`;

const Wrapper = styled(Box)`
    background-color: #f0f2f5;
    position: relative;
    margin: 0 13px;
    width: 100%;
    border-radius: 10px;
`;

const Icon = styled(Box)`
    position: absolute;
    height: 100%;
    padding: 7px 10px;
    color: #696969;
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 16px;
    padding-left: 65px;
    height: 15px;
    font-size: 15px;
    color: black;
`;

const Search = ({setText}) => {
  return (
    <Component>
        <Wrapper>
            <Icon>
                <SearchIcon 
                  fontSize='small'
                />
            </Icon>
            <InputField 
              placeholder='Search or start new chat'
              onChange={(e) => setText(e.target.value)}
            />
        </Wrapper>
    </Component>
  )
}

export default Search;