
import React , {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import RichTextEditor from 'react-rte';
import { Editor , tinymce } from '@tinymce/tinymce-react';
// import TinyMCE from 'react-tinymce';
import './app.css'
import axios from 'axios'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Radio } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { TextArea } = Input;

var flag = 0
var ti = ""
var te = ""
var content_editor = ""
var edit_title = ""
var edit_tags = ""
var edit_key = ""
class RegistrationForm extends React.Component {
  static propTypes = {
    onChange: PropTypes.func
  };
  state = {
    value: RichTextEditor.createEmptyValue(),
    activeEditor : "empty value",
    content : ""
  }


  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }



  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
         value.toString('html')
      );
      console.log(value);
    }
  };

  getPostToBeEdited = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(['title_edit' , 'tag_edit'],(err, values) => {
      var key_check = values.title_edit + values.tag_edit;
      edit_key = key_check
      edit_tags = values.tag_edit
      edit_title = values.title_edit
      console.log(key_check);
      if (!err) {
        console.log('Received values of form: ', values);
        const ax_url = 'https://server-try.herokuapp.com/api/update/';
        axios.get(ax_url)
        .then(res => {
          this.setState({ hungry_rides : res.data[8].hungry_rides.reverse() ,
            food_walks : res.data[8].food_walks.reverse(),
            about : res.data[8].about
          });
          console.log("this is tag_edit" , values.tag_edit)
          if(values.tag_edit == 'food_walks'){
          var food_walks = this.state.food_walks || []
          food_walks.forEach(function(item, index){
            console.log(item.key)
            if (key_check == item.key){
              console.log("found a match, which is " ,item.key)
              // console.log(this.state.activeEditor);
              window.Editor.setContent("this is the content to be set");
            }
          })
        }
        else if (values.tag_edit == 'hungry_rides') {
          var hungry_rides = this.state.hungry_rides || []
          hungry_rides.forEach(function(item, index){
            // console.log(item.key)
            if (key_check == item.key){
              console.log("found a match, which is " ,item.key)
              // console.log(this.state.activeEditor);
              // _.tinymce.get('edit_editor').setContent("this is the content to be set");
              console.log("is the data set, that is the question")
              content_editor = item.content;
              // this.state.content = item.content;
            }
          })
        }
          // console.log(this.state.food_walks);
    });
  }
    else {
      console.log("there is an error in edit form ");
    }
  });
}

  handleEditorChange = (e) => {
    // console.log('Content was updated:', e.target.getContent());
    ti = e.target.getContent()
    console.log(ti)
  }

  UpdateEditorValues = (e) => {
    e.preventDefault();
    axios.put('https://server-try.herokuapp.com/api/delete/', {titled: edit_title, tagged: edit_tags})
    .then(response => {
      console.log(response);
      axios.put('https://server-try.herokuapp.com/api/update', {title: edit_title,content: te , tags: edit_tags,key: edit_key})
      .then(response => {
        console.log(response);
        alert("Submitted")
          })
        .catch(error => {
           console.log("there is an error in the field");
          });
        })
      .catch(error => {
         console.log("there is some error in updating. please check ");
        });

  }

  checking = (e) => {
    // console.log('Content was updated:', e.target.getContent());
    if(flag ==0){
    e.target.setContent(content_editor);
    flag = 1
  }
  else if (flag == 1) {
    te = e.target.getContent()
    console.log(te)
  }
    // console.log(ti)
  }

  handleDeleteSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(['titled' , 'tagged'],(err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        axios.put('https://server-try.herokuapp.com/api/delete/', {titled: values.titled, tagged: values.tagged})
        .then(response => {
          console.log(response);
          alert("Removed Successfully")
            })
          .catch(error => {
             console.log(err);
            });
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(['title' , 'tags' ] , (err, values) => {
      if (!err) {
        var key = values.title + values.tags
        console.log(key)
        console.log(ti);
        console.log('Received values of form: ', values);
        axios.put('https://server-try.herokuapp.com/api/update', {title: values.title,content: ti , tags: values.tags,key: key})
        .then(response => {
          console.log(response);
          alert("Submitted")
            })
          .catch(error => {
             console.log(err);
            });
      }
    });
  }


  render() {
    console.log(ti)
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 20 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 20 },
        sm: { span: 8 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 20,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <div>
      <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        id="edit_editor"
        init={{
          plugins: ['advlist autolink lists link image charmap print preview hr anchor pagebreak',
    'searchreplace wordcount visualblocks visualchars code fullscreen',
    'insertdatetime media nonbreaking save table contextmenu directionality',
    'emoticons template paste textcolor colorpicker textpattern imagetools'
    ],

          toolbar: 'undo redo | bold italic underline | alignleft aligncenter alignright | code',
          image_advtab: true,
          content_css: ['//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
    '//www.tinymce.com/css/codepen.min.css'
   ]
        }}
        onChange={this.handleEditorChange}
      />
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="Title"
        >
          {getFieldDecorator('title', {
            rules: [{
              required: true, message: 'Please input the title',
            }],
          })(
            <Input />
          )}
        </FormItem>
         <FormItem
          {...formItemLayout}
          label="Tag"
        >
          {getFieldDecorator('tags' , {rules: [{
              required: true, message: 'Please input the content!',
            }],
          })(
            <RadioGroup>
              <RadioButton value="hungry_rides">Hungry Rides</RadioButton>
              <RadioButton value="food_walks">Hiker's Diary</RadioButton>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>

      <h1> To remove a post, give it's title here. </h1>
      <Form onSubmit={this.handleDeleteSubmit}>
      <FormItem
          {...formItemLayout}
          label="Title"
        >
          {getFieldDecorator('titled', {
            rules: [{
              required: true, message: 'Please input the title',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Tagged"
        >
          {getFieldDecorator('tagged' , {rules: [{
              required: true, message: 'Please input the content!',
            }],
          })(
            <RadioGroup>
              <RadioButton value="hungry_rides">Hungry Rides</RadioButton>
              <RadioButton value="food_walks">Hiker's Diary</RadioButton>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
        </Form>
        <Form onSubmit={this.getPostToBeEdited} >
        <h1>To edit a post, give it here.</h1>
        <FormItem
          {...formItemLayout}
          label="Title" >
          {getFieldDecorator('title_edit', {
            rules: [{
              required: true, message: 'Please input the title',
            }],
          })(
            <Input />
          )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Tagged"
          >
            {getFieldDecorator('tag_edit' , {rules: [{
                required: true, message: 'Please input the content!',
              }],
            })(
              <RadioGroup>
                <RadioButton value="hungry_rides">Hungry Rides</RadioButton>
                <RadioButton value="food_walks">Hiker's Diary</RadioButton>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Submit</Button>
          </FormItem>
          </Form>
          <Form onSubmit={this.UpdateEditorValues}>
          <FormItem>
          <Editor
            // initialValue = ""
            initialValue="<p>Delete it to get the data inside the editor</p>"
            // id="edit_editor"
            init={{
              // setup: editor => {
              //   this.setState({activeEditor: editor}) },
              id:"edit_editor",
              plugins: ['advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
        'insertdatetime media nonbreaking save table contextmenu directionality',
        'emoticons template paste textcolor colorpicker textpattern imagetools'
        ],

              toolbar: 'undo redo | bold italic underline | alignleft aligncenter alignright | code',
              image_advtab: true,
              content_css: ['//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
        '//www.tinymce.com/css/codepen.min.css'
       ]
            }}
            onChange={this.checking}

            // onClick={this.checking}
          />
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Update</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);


class MyEditor extends React.Component {
  render(){
    return(
      <div id = "editor">
      <h1> content Form </h1>
     <WrappedRegistrationForm />
     </div>
    )
}
}


export default MyEditor
