import"./featuredInfo.css";
import{ArrowDownward,ArrowUpward} from "@material-ui/icons";
const FeaturedInfo = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">30000</span>
                <span className="featuredMoneyRate">- 11.4 <ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featuredSub">Compare to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">₹80000</span>
                <span className="featuredMoneyRate">- 11.4 <ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featuredSub">Compare to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">₹20000</span>
                <span className="featuredMoneyRate"> 2.4 <ArrowUpward className="featuredIcon"/>
                </span>
            </div>
            <span className="featuredSub">Compare to last month</span>
        </div>
      
    </div>
  )
}

export default FeaturedInfo
