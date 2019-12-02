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
      dataFormat: data.roster.filter(item => item.length === 5),
      data: data.roster.filter(item => item.length === 5),
      searchInput: "",
      sorts: {
        EP: "",
        GP: "",
        PR: ""
      }
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  updateSort = type => {
    this.setState(prev => {
      const oldStatus = prev.sorts[type];
      const newStatus = {
        EP: "",
        GP: "",
        PR: ""
      };

      if (oldStatus === "") newStatus[type] = "down";
      else if (oldStatus === "down") newStatus[type] = "up";
      else if (oldStatus === "up") newStatus[type] = "";

      return {
        sorts: newStatus,
        dataFormat: this.sortData(prev.data)
      };
    });
  };

  onShareAppMessage() {
    return {};
  }

  sortData(data) {
    const { sorts } = this.state

    return data.sort((x, y) => {
      return x[2] - y[2]
    })
  }

  searchInputInput = e => {
    const searchInput = e.detail.value;
    let dataFormat = this.state.data.filter(item => item[0]);

    if (searchInput) {
      dataFormat = dataFormat.filter(item => {
        return (
          item[0]
            .toLocaleLowerCase()
            .indexOf(searchInput.toLocaleLowerCase()) !== -1
        );
      });
    }

    this.setState({
      dataFormat
    });
  };

  render() {
    const { sorts, dataFormat } = this.state;

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
                <Toggle type={sorts.EP}>EP</Toggle>
              </View>
              <View onClick={() => this.updateSort("GP")} className="GP">
                <Toggle type={sorts.GP}>GP</Toggle>
              </View>
              <View onClick={() => this.updateSort("PR")} className="PR">
                <Toggle type={sorts.PR}>PR</Toggle>
              </View>
            </View>
            {dataFormat.map((item, index) => {
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
