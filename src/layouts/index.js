import MasterLayout from './master/MasterLayout';
function BasicLayout(props) {
  return <MasterLayout>{props.children}</MasterLayout>;
}

export default BasicLayout;
