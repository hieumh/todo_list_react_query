import { PlusOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Form, Input } from "antd";

const StyledInput = styled.div`
  .ant-input:placeholder-shown {
    background-color: #434140;
  }
`

const StyledForm = styled.div`
  .ant-form-item {
    margin-bottom: 0;
  }
`

function NewTaskAsElementList() {
  return (
    <div className="bottom-5 fixed right-4 left-[calc(20%+16px)]">
      <div className="bg-black/75 py-2 pl-8 pr-4 rounded-[4px] text-white w-full relative">
        <PlusOutlined className="absolute left-3 top-4" />
        <StyledForm>
          <Form>
            <Form.Item name="nameTask">
              <StyledInput>
                <Input className="bg-black/75 text-white border-none" placeholder="Add task..." bordered={false} />
              </StyledInput>
            </Form.Item>
          </Form>
        </StyledForm>
      </div>
    </div>
  );
}

export default NewTaskAsElementList;