import Taro, { Component, Config } from "@tarojs/taro";
import { View, ScrollView, Input, Block } from "@tarojs/components";
import data from "./data";
import "./index.scss";
import Toggle from "./Toggle";

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

  updateSort = type => {
    console.log(type);
  };

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

    if (searchInput) {
      a = a.filter(item => {
        return (
          item[0]
            .toLocaleLowerCase()
            .indexOf(searchInput.toLocaleLowerCase()) !== -1
        );
      });
    }

    return (
      <View className="index">
        <View className="search">
          <Input
            placeholder="搜索"
            onInput={this.searchInputInput}
            className="searchInput"
          ></Input>
        </View>
        <ScrollView scrollX={true}>
          <View className="table">
            <View className="item header">
              <View className="name">名字</View>
              <View className="job">职业</View>
              <View onClick={() => this.updateSort("EP")} className="EP">
                <Toggle type="down">EP</Toggle>
              </View>
              <View onClick={() => this.updateSort("GP")} className="GP">
                <Toggle type="down">GP</Toggle>
              </View>
              <View onClick={() => this.updateSort("PR")} className="PR">
                <Toggle type="down">PR</Toggle>
              </View>
            </View>
            {a.map((item, index) => {
              return (
                <View key={index} className="item">
                  <View className="name">{item[0]}</View>
                  <View className="job">{item[1]}</View>
                  <View className="EP">{item[2]}</View>
                  <View className="GP">{item[3]}</View>
                  <View className="PR">{item[4]}</View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
