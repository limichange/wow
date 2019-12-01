import Taro, { Component, Config } from "@tarojs/taro";
import { View, ScrollView, Input } from "@tarojs/components";
import data from "./data";
import "./index.scss";

export default class Index extends Component<any, any> {
  config: Config = {
    navigationBarTitleText: "首页"
  };

  constructor() {
    super(...arguments);

    this.state = {
      searchInput: ""
    };
  }

  data = data.roster;

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onShareAppMessage() {
    return {};
  }

  searchInputInput = e => {
    this.setState({
      searchInput: e.detail.value
    });
  };

  render() {
    let a = this.data.filter(item => item[0]);
    const { searchInput } = this.state;
    console.log(searchInput);

    if (searchInput) {
      a = a.filter(item => {
        return item[0].toLocaleLowerCase().indexOf(searchInput.toLocaleLowerCase()) !== -1
      })
    }

    return (
      <View className="index">
        <View className="search">
          搜索
          <Input
            onInput={this.searchInputInput}
            className="searchInput"
          ></Input>
        </View>
        <ScrollView scrollX={true}>
          <View className="table">
            <View className="item">
              <View className="name">名字</View>
              <View className="job">职业</View>
              <View className="attendance">出勤率</View>
              <View className="EP">EP</View>
              <View className="GP">GP</View>
              <View className="PR">PR</View>
              <View className="priority">优先级</View>
            </View>
            {a.map((item, index) => {
              return (
                <View key={index} className="item">
                  <View className="name">{item[0]}</View>
                  <View className="job">{item[1]}</View>
                  <View className="attendance">100%</View>
                  <View className="EP">{item[2]}</View>
                  <View className="GP">{item[3]}</View>
                  <View className="PR">{item[4]}</View>
                  <View className="priority">{index}</View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
