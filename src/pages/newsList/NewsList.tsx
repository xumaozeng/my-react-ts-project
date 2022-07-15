/**
 * 新闻列表
 */
import { Component, createRef, ReactNode } from "react";
import "./index.scss";

interface NewsListState {
  newsArr: string[];
}
class NewsList extends Component<{}, NewsListState> {
  timer: NodeJS.Timer | undefined;
  listRef = createRef<HTMLDivElement>();
  state: Readonly<NewsListState> = {
    newsArr: [],
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      const { newsArr } = this.state;
      const news: string = "新闻" + (newsArr.length + 1);
      this.setState({ newsArr: [news, ...newsArr] });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  getSnapshotBeforeUpdate() {
    return this.listRef.current?.scrollHeight;
  }
  componentDidUpdate(prevProps: {}, prevState: NewsListState, height: number) {
    const list = this.listRef.current as HTMLDivElement;
    list.scrollTop += list.scrollHeight - height;
  }
  render(): ReactNode {
    const { newsArr } = this.state;

    return (
      <div className="list" ref={this.listRef}>
        {newsArr.map(n => (
          <div key={n} className="news">
            {n}
          </div>
        ))}
      </div>
    );
  }
}

export default NewsList;
