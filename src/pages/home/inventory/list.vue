<template>
	<div class="clearfix h100 repertory " >
		<div class="home-left h100 w40 pull-left">
			<form action="javascript:;" @submit="searchdata(true)">
				<div class="title">
					<h3 class="f32 pull-left fblack">搜索钻石</h3>
					<input type="button" @click="restsearchdata" value="重置条件" class="btn-cont pull-right">
				</div>
				<table class="table table-list">
					<tbody>
						<tr>
							<td class="pt-4">价格</td>
							<td class="pr">
								<span class="sliderPricemin slidertips pa">{{sliderPrice.value[0]}}</span>
								<span class="sliderPricemax slidertips pa">{{sliderPrice.value[1]}}</span>
								<vue-slider @drag-end="sliderPriceDragDnd(sliderPrice.value)" class="pt-4" v-bind="sliderPrice" v-model="sliderPrice.value"></vue-slider>
							</td>
						</tr>
						<tr>
							<td class="pt-4">重量</td>
							<td class="pr">
								<span class="sliderWeightmin slidertips pa">{{sliderWeight.value[0]}}</span>
								<span class="sliderWeightmax slidertips pa">{{sliderWeight.value[1]}}</span>
								<vue-slider class="pt-4" v-bind="sliderWeight" v-model="sliderWeight.value"></vue-slider>
							</td>
						</tr>
						<tr>
							<td class="shape-title">形状</td>
							<td style="padding-bottom: 0.3rem;" class="shapeListitems">
								<el-checkbox-group v-model="shapeListCheck" class="shape-box">
									<el-checkbox :label="item.name" class="w20" :key="index" v-for="(item,index) in shapeList">
										<img :src="item.src" alt="" class="shape">
										<div></div>
									</el-checkbox>
									
								</el-checkbox-group>
							</td>
						</tr>
						<tr>
							<td>颜色</td>
							<td>
								<el-checkbox-group v-model="colorListCheck" class="color">
									<el-checkbox :label="item" :key="index" v-for="(item,index) in colorList"></el-checkbox>
								</el-checkbox-group>
							</td>
						</tr>
						<tr>
							<td>净度</td>
							<td>
								<el-checkbox-group v-model="clarityListCheck" class="color">
									<el-checkbox :label="item" :key="index" v-for="(item,index) in clarityList"></el-checkbox>
								</el-checkbox-group>
							</td>
						</tr>
						<tr>
							<td>切工</td>
							<td>
								<el-checkbox-group v-model="curListCheck" class="color">
									<el-checkbox :label="item" :key="index" v-for="(item,index) in curList"></el-checkbox>
								</el-checkbox-group>
							</td>
						</tr>
						<tr>
							<td>抛光</td>
							<td>
								<el-checkbox-group v-model="polishListCheck" class="color">
									<el-checkbox :label="item" :key="index" v-for="(item,index) in polishList"></el-checkbox>
								</el-checkbox-group>
							</td>
						</tr>
						<tr>
							<td>对称</td>
							<td>
								<el-checkbox-group v-model="symListCheck" class="color">
									<el-checkbox :label="item" :key="index" v-for="(item,index) in symList"></el-checkbox>
								</el-checkbox-group>
							</td>
						</tr>
						<tr>
							<td>证书</td>
							<td>
								<el-checkbox-group v-model="certListCheck" class="color">
									<el-checkbox :label="item" :key="index" v-for="(item,index) in certList"></el-checkbox>
								</el-checkbox-group>
							</td>
						</tr>
						<tr>
							<td></td>
							<td>
								<input type="submit" class="mybtn w100" value="搜索裸钻">
							</td>
						</tr>
					</tbody>
				</table>
			</form>
		</div>
		<div class="home-right w60 pull-right">
			<div class="title transition-box">
				<h3 class="f32 pull-left fblack">全球共搜到 <span class="f32" v-text="searchlist['searchNum']"></span> 颗裸钻</h3>
			</div>
			<el-table :data="searchlist['tdList']" stripe @sort-change='defaultSort_fn($event)' @row-click='opendetails($event)' :default-sort = "defaultSort">
				<el-table-column v-if=false prop="id" label="">
				</el-table-column>
				<el-table-column fit min-width="10%" prop="Shape" label="形状">
					<template slot-scope="scope">
						<div class="imgbox">
							<img v-if="scope.row.Shape == 'ROUND' " src="../../../assets/image/icon/lzkc1_03_r1_c1.png" height="393"
							width="393"
							alt=""><!--圆形-->
							<img v-if="scope.row.Shape == 'PRINCESS' " src="../../../assets/image/icon/lzkc1_03_r1_c3.png"
							height="393"
							width="393" alt=""><!--公主房-->
							<img v-if="scope.row.Shape == 'EMERALD' " src="../../../assets/image/icon/lzkc1_03_r1_c5.png" height="393"
							width="393" alt=""><!--祖母绿-->
							<img v-if="scope.row.Shape == 'MARQUISE' " src="../../../assets/image/icon/lzkc1_03_r1_c7.png"
							height="393"
							width="393" alt=""><!--橄榄型-->
							<img v-if="scope.row.Shape == 'OVAL' " src="../../../assets/image/icon/lzkc1_03_r1_c9.png" height="393"
							width="393"
							alt=""><!--椭圆形-->
							<img v-if="scope.row.Shape == 'RADIANT' " src="../../../assets/image/icon/lzkc2_03_r1_c1.png" height="393"
							width="393" alt=""><!--雷蒂恩-->
							<img v-if="scope.row.Shape == 'PEAR' " src="../../../assets/image/icon/lzkc2_03_r1_c3.png" height="393"
							width="393"
							alt=""><!--水滴形-->
							<img v-if="scope.row.Shape == 'HEART' " src="../../../assets/image/icon/lzkc2_03_r1_c5.png" height="393"
							width="393"
							alt=""> <!--心形-->
							<img v-if="scope.row.Shape == 'TRIANGLE' " src="../../../assets/image/icon/lzkc2_03_r1_c7.png"
							height="393"
							width="393" alt=""><!--三角形-->
							<img v-if="scope.row.Shape == 'CUSHION' " src="../../../assets/image/icon/lzkc2_03_r1_c9.png" height="393"
							width="393" alt=""><!--垫形-->
						</div>
					</template>
				</el-table-column>
				<el-table-column fit min-width="12%" sortable="custom" prop="Size" label="重量"></el-table-column>
				<el-table-column fit min-width="8%" prop="Color" label="颜色"></el-table-column>
				<el-table-column fit min-width="10%"  prop="Clarity" label="净度"></el-table-column>
				<el-table-column fit min-width="8%" prop="Cut" label="切工"></el-table-column>
				<el-table-column fit min-width="10%" prop="Polish" label="抛光"></el-table-column>
				<el-table-column fit min-width="8%" prop="Sym" label="对称"></el-table-column>
				<el-table-column fit min-width="10%" prop="Flour" label="荧光"></el-table-column>
				<el-table-column fit min-width="10%" prop="Cert" label="证书"></el-table-column>
				<el-table-column fit min-width="14%" sortable="custom" prop="totalPrice" label="价格"></el-table-column>
			</el-table>
			<!--滑动门-->
			<transition name="slide-fade">
				<div class="sliderdoor" v-show="procuctdetailsIsshow">
					<div class="sliderdoor-content h100">
						<i @click="closedetails" class="el-icon-error el-icon-circle-cross"></i>
						<div class="img">
							<img v-if="pruductdetails.Shape == 'ROUND' " src="../../../assets/image/round.png"
							height="393"
							width="393"
							alt=""><!--圆形-->
							<img v-if="pruductdetails.Shape == 'PRINCESS' " src="../../../assets/image/cushion.png"
							height="393"
							width="393" alt=""><!--公主房-->
							<img v-if="pruductdetails.Shape == 'EMERALD' " src="../../../assets/image/zuanshi_emerald.png"
							height="393"
							width="393" alt=""><!--祖母绿-->
							<img v-if="pruductdetails.Shape == 'MARQUISE' " src="../../../assets/image/marquise.png"
							height="393"
							width="393" alt=""><!--橄榄型-->
							<img v-if="pruductdetails.Shape == 'OVAL' " src="../../../assets/image/oval.png"
							height="393"
							width="393"
							alt=""><!--椭圆形-->
							<img v-if="pruductdetails.Shape == 'RADIANT' " src="../../../assets/image/Asscher.png"
							height="393"
							width="393" alt=""><!--雷蒂恩-->
							<img v-if="pruductdetails.Shape == 'PEAR' " src="../../../assets/image/pear.png"
							height="393"
							width="393"
							alt=""><!--水滴形-->
							<img v-if="pruductdetails.Shape == 'HEART' " src="../../../assets/image/heart.png"
							height="393"
							width="393"
							alt=""> <!--心形-->
							<img v-if="pruductdetails.Shape == 'TRIANGLE' " src="../../../assets/image/round_2_3.jpg"
							height="393"
							width="393" alt=""><!--三角形-->
							<img v-if="pruductdetails.Shape == 'CUSHION' " src="../../../assets/image/radiant.png"
							height="393"
							width="393" alt=""><!--垫形-->
						</div>
						<div class="txt">
							<div class="details bt1 bb1">
								<ul class="w100 clearfix">
									<li class=" dib pull-left clearfix">
										<div class="txt-left w30  pull-left fc-gray">货号：</div>
										<div class="txt-right w60  pull-left">{{pruductdetails.Ref}}</div>
									</li>
									<li class="w50 dib pull-left clearfix">
										<div class="txt-left w30  pull-left fc-gray">证书：</div>
										<div class="txt-right w60  pull-left">{{pruductdetails.Cert}}</div>
									</li>
									<li class="w50 dib pull-left clearfix">
										<div class="txt-left w30  pull-left fc-gray">形状：</div>
										<div class="txt-right w60  pull-left">{{pruductdetails.Shape}}</div>
									</li>
									<li class="w50 dib pull-left clearfix">
										<div class="txt-left w30  pull-left fc-gray">切工：</div>
										<div class="txt-right w60  pull-left">{{pruductdetails.Cut}}</div>
									</li>
									<li class="w50 dib pull-left clearfix">
										<div class="txt-left w30  pull-left fc-gray">重量：</div>
										<div class="txt-right w60  pull-left">{{pruductdetails.Size}}</div>
									</li>
									<li class="w50 dib pull-left clearfix">
										<div class="txt-left w30  pull-left fc-gray">抛光：</div>
										<div class="txt-right w60  pull-left">{{pruductdetails.Polish}}</div>
									</li>
									<li class="w50 dib pull-left clearfix">
										<div class="txt-left w30  pull-left fc-gray">颜色：</div>
										<div class="txt-right w60  pull-left">{{pruductdetails.Color}}</div>
									</li>
									<li class="w50 dib pull-left clearfix">
										<div class="txt-left w30  pull-left fc-gray">对称：</div>
										<div class="txt-right w60  pull-left">{{pruductdetails.Sym}}</div>
									</li>
									<li class="w50 dib pull-left clearfix">
										<div class="txt-left w30  pull-left fc-gray">净度：</div>
										<div class="txt-right w60  pull-left">{{pruductdetails.Clarity}}</div>
									</li>
									<li class="w50 dib pull-left clearfix">
										<div class="txt-left w30  pull-left fc-gray">直径：</div>
										<div class="txt-right w60  pull-left">{{pruductdetails.Cert}}</div>
									</li>
								</ul>
							</div>
						</div>
						<div class="peice-box tar pt-2 pb-2">
							<span>优惠价：</span> <span class="fc-blue">¥</span> <span
							class="fc-blue f36">{{pruductdetails.totalPrice }}</span> <span class="fc-blue">元</span>
						</div>
						<div class="btn-box bt1 pt-6">
							<button v-if="set.dia == '1'"
							@click="openonlydiamond('成功添加进购物车','前往购物车','继续购买','Shopcar','InventoryList',false)" class="btn-w">
							购买裸钻
						</button>
						<router-link v-if="set.dia == '1'" class="btn-b"
						:to="{path:'/product',query:{set:JSON.stringify(set),did:did,letteringtext:this.letteringtext}}">选款定制
					</router-link>
					<router-link v-if="set.dia == '3'" class="btn-b"
					:to="{path:'/product',query:{set:JSON.stringify(set),did:did,letteringtext:this.letteringtext}}">下一步
				</router-link><!--戒托列表-->
				<router-link v-if="set.dia == '2'" class="btn-b"
				:to="{path:'/commoncustom/order',query:{set:JSON.stringify(set),clientmsg:senddata,pricepushdata:sendpricedata,did:did,rid:rid,letteringtext:this.letteringtext}}">下一步
			</router-link><!--确认定制信息-->

			<router-link v-if="set.dia == '4'" class="btn-b"
			:to="{
				path:'/depthcustom',
				query:{
					did: did, 
					datalist: datalist, 
					gj_handsize: gj_handsize,
					gj_lettering: gj_lettering,
					gj_cremark: gj_cremark
				}
				}">下一步
		</router-link><!--确认深度定制信息-->
		<router-link v-if="set.dia == '5'" class="btn-b"
				:to="{path:'/depthcustom/orderdetails',
					query:{
					did: did, 
					datalist: datalist, 
					gj_handsize: gj_handsize,
					gj_lettering: gj_lettering,
					gj_cremark: gj_cremark,
                    client:client,
                    pricebefore:pricebefore,
                    pricebeforetip:pricebeforetip,
                    priceafter:priceafter,
                    priceaftertip:priceaftertip,
                    salesman:salesman,
                    gj_order_id: gj_order_id,
				}
			}">下一步
		</router-link><!-- 提交深度定制信息 -->
	</div>
</div>
</div>
</transition>
<Pagemodule :pagesize="12" @Currentpage="getpage" :page="page" :total="searchlist['searchNum']"></Pagemodule>
</div>
</div>
</template>
<script type="text/ecmascript-6">

import vueSlider from 'vue-slider-component';
export default {
	created() {
		this.routerfun()
	},
	components: {
		vueSlider
	},
	data() {
		return {
			/*排序配置*/
			defaultSort: {},
			price_sort: '',
			size_sort: '',
			texturedata:'',
			pricepushdata:'',
			texturedata:'',
			/*设置公用组件数据*/
			set: JSON.parse(this.$route.query.set),
			/*戒托id*/
			rid: this.$route.query.rid,
			/*裸钻id*/
			did: this.$route.query.did,
			/*传过来的选择数据*/
			senddata: this.$route.query.clientmsg,
			/*传递过来的价格返回数据*/
			sendpricedata: this.$route.query.pricepushdata,
			HandNumselected: '',
			letteringtext: '',
			/*加载动画调用*/
			loadingIsshow: false,
			sliderPrice_data: 0,
			sliderPrice: {
				value: [
				1000,
				10000000
				],
				width: "100%",
				height: 4,
				dotSize: 20,
				min: 1000,
				max: 10000000,
				interval: 1000,
				disabled: false,
				show: true,
				tooltip: "false",
				piecewise: true,
				bgStyle: {
					backgroundColor: '#fff',
					boxShadow: 'inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)'
				},
				tooltipStyle: {
					backgroundColor: '#666',
					borderColor: '#666'
				},
				processStyle: {
					backgroundColor: '#8BD5DF'
				},
				data: [
				1000,
				2000,
				3000,
				4000,
				5000,
				10000,
				20000,
				30000,
				40000,
				50000,
				60000,
				70000,
				80000,
				90000,
				100000,
				500000,
				1000000,
				5000000,
				10000000,
				]
			},
			sliderWeight: {
				value: [0.1, 10.0],
				width: '100%',
				height: 4,
				dotSize: 20 ,
				min: 0.1,
				max: 10.0,
				disabled: false,
		          interval: 0.1, // 分段间隔
		          show: true,
		          tooltip: "false",
		          piecewise: true,
		          bgStyle: {
		          	backgroundColor: '#fff',
		          	boxShadow: 'inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)'
		          },
		          tooltipStyle: {
		          	backgroundColor: '#666',
		          	borderColor: '#666'
		          },
		          processStyle: {
		          	backgroundColor: '#8BD5DF'
		          },
		          data: [
		          0.1,
		          0.2,
		          0.3,
		          0.4,
		          0.5,
		          0.6,
		          0.7,
		          0.8,
		          0.9,
		          1.0,
		          2.0,
		          3.0,
		          5.0,
		          10.0,
		          ]
		      },
		      /*left*/
		      shapeList: [
		      {name: "ROUND", src: require('../../../assets/image/icon/lzkc1_03_r1_c1.png')},
		      {name: "PRINCESS", src: require('../../../assets/image/icon/lzkc1_03_r1_c3.png')},
		      {name: "EMERALD", src: require('../../../assets/image/icon/lzkc1_03_r1_c5.png')},
		      {name: "MARQUISE", src: require('../../../assets/image/icon/lzkc1_03_r1_c7.png')},
		      {name: "OVAL", src: require('../../../assets/image/icon/lzkc1_03_r1_c9.png')},
		      {name: "ASSCHER", src: require('../../../assets/image/icon/lzkc2_03_r1_c1.png')},
		      {name: "PEAR", src: require('../../../assets/image/icon/lzkc2_03_r1_c3.png')},
		      {name: "HEART", src: require('../../../assets/image/icon/lzkc2_03_r1_c5.png')},
		      {name: "TRILLION", src: require('../../../assets/image/icon/lzkc2_03_r1_c7.png')},
		      {name: "CUSHION", src: require('../../../assets/image/icon/lzkc2_03_r1_c9.png')},
		      ],
		      shapeListCheck: [],
		      selectItem: '',
		      colorListCheck: [],
		      colorList: ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
		      colorItem: 0,
		      clarityList: ["IF", "VVS1", "VVS2", "VS1", "VS2", "SI1", "SI2"],
		      clarityListCheck: [],
		      clarityItem: 0,
		      curList: ["EX", "VG", "GD"],
		      curListCheck: [],
		      curItem: 0,
		      symList: ["EX", "VG", "GD"],
		      symListCheck: [],
		      polishList: ["EX", "VG", "GD"],
		      polishListCheck: [],
		      polishingItem: 0,
		      certList: ["GIA", "HRD", "IGI"],
		      certListCheck: [],
		      /*right*/
		      searchlist: {
		      	tdList: [],
		      	searchNum: 0
		      },
		      /*产品详情*/
		      pruductdetails: '',
		      procuctdetailsIsshow: false,
		      /*获取到的页码*/
		      page: 1,
		      /*跳转挑选戒托id*/
		      did: '',
		      /*刻字数据*/
		      letteringtext:'',
		      /*传递过来的裸钻参数*/
		      choosediadata:'',
		      /*记录价格滑动的次数*/
		      sliderPricenum: 0,
		      /*记录深度定制添加参数的信息*/
		      datalist: '',
		      /*记录深度定制手寸的信息*/
		      gj_handsize: '',
		      /*记录深度定制刻字的信息*/
		      gj_lettering: '',
		      /*记录深度定制说明的信息*/
		      gj_cremark: '',
		      /*顾客信息client*/
		      client: '',
		      /*款项信息price*/
		      pricebefore: '',
		      pricebeforetip: '',
		      priceafter: '',
		      priceaftertip: '',
		      /*销售员*/
		      salesman: '',
		      /*订单ID*/
		      gj_order_id: '',
		  }
		},
		methods: {
			defaultSort_fn(e){
				//如果是价格排序
				if(e.prop == 'totalPrice'){
					this.size_sort = '';
					//大到小
					if(e.order == 'descending'){
						this.price_sort = 'gprice';
						this.searchdata(true);
					}else if(e.order == 'ascending'){
						this.price_sort = 'sprice';
						this.searchdata(true);
					}
				}
				//如果是重量排序
				if(e.prop == 'Size'){
					this.price_sort = '';
					//大到小
					if(e.order == 'descending'){
						this.size_sort = 'heavy ';
						this.searchdata(true);
					}else if(e.order == 'ascending'){
						this.size_sort = 'small_size';
						this.searchdata(true);
					}
				}
			},
			sliderPriceDragDnd(val){
			},
			/*初始化参数*/
			initialize() {
				var url = this.BASEURL + '/index.php?action=diamonds';
				this.$http.get(url, {
					params: {
						perpage: 12,
						totalprice_order: 'sprice'
					}
				}, {
					before: this.loadingIsshow = true,
					progress: this.loadingIsshow = false
				}).then(response => {
					if (response.body.error_code == 0) {
						this.searchlist.tdList = response.body.diamonds;
						this.searchlist['searchNum'] = parseInt(response.body.dia_nums);
					}

				}, response => {
					console.log(response);
				});
			},
			/*搜索裸钻数据*/
			searchdata(ev) {
				if(ev){
					this.page = 1;
				}
				this.clearsearchlist(this.colorListCheck);
				var sliderPrice_min = '';
				var sliderPrice_max = '';
				var sliderWeight_min = '';
				var sliderWeight_max = '';
				if(this.sliderPrice.value[0] == 1000 && this.sliderPrice.value[1] == 10000000 ){
					sliderPrice_min = '';
					sliderPrice_max = '';
				}else{
					sliderPrice_min = this.sliderPrice.value[0]+ '-';
					sliderPrice_max = this.sliderPrice.value[1];
				}
				if(this.sliderWeight.value[0] == 0.1 && this.sliderWeight.value[1] == 10 ){
					sliderWeight_min = '';
					sliderWeight_max = '';
				}else{
					sliderWeight_min = this.sliderWeight.value[0]+ '-';
					sliderWeight_max = this.sliderWeight.value[1];
				}
				var url = this.BASEURL+'/index.php?action=diamonds';
				this.$http.get(url, {
					params: {
						page: this.page,
						perpage: 12,
						price: sliderPrice_min + sliderPrice_max,
						size: sliderWeight_min + sliderWeight_max,
						shape: this.clearsearchlist(this.shapeListCheck),
						color: this.clearsearchlist(this.colorListCheck),
						clarity: this.clearsearchlist(this.clarityListCheck),
						cut: this.clearsearchlist(this.curListCheck),
						polish: this.clearsearchlist(this.polishListCheck),
						sym: this.clearsearchlist(this.symListCheck),
						cert: this.clearsearchlist(this.certListCheck),
						totalprice_order: this.price_sort,
						sizeorder: this.size_sort,
					}
				}).then(response => {

					if (response.body.error_code == 0) {
						if (response.body.diamonds == undefined) {
							this.searchlist.tdList = [];
							this.searchlist['searchNum'] = 0;
							return false;
						} else {
							this.searchlist['searchNum'] = parseInt(response.body.dia_nums);
						}
						this.searchlist.tdList = response.body.diamonds;
					}
				}, response => {
					console.log(response);
				});
			},
			/*查询数据整理*/
			clearsearchlist(demo) {
				var str = "";
				demo.forEach(
					function (item) {
						str += item + "-"
					}
					)
				return str;
			},
			/*重置查询数据*/
			restsearchdata() {
				this.sliderPrice.value = [1000, 10000000]
				this.sliderWeight.value = [0.1, 10.0]
				this.sliderPrice.min = 1000
				this.sliderPrice.max = 10000000
				this.sliderWeight.min = 0.1
				this.sliderWeight.max = 10.0
				this.shapeListCheck = []
				this.colorListCheck = []
				this.clarityListCheck = []
				this.curListCheck = []
				this.polishListCheck = []
				this.symListCheck = []
				this.certListCheck = []
				this.initialize()
				this.sliderPrice_data = 0
				this.defaultSort = {prop: 'totalPrice', order: 'descending'}
			},
			/*获取当行的id然后发送请求获取数据，渲染到滑动门*/
			opendetails(e) {
				if (this.procuctdetailsIsshow == true) {
					this.procuctdetailsIsshow = false;
					return false;
				} else {
					this.procuctdetailsIsshow = true
					var id = e.id;
					this.did = e.id;

					var url = this.BASEURL+'/index.php?action=diamonds_detail';
					this.$http.get(url, {
						params: {
							id: id,
						}
					}).then(response => {
						if (response.body.error_code == 0) {
							this.pruductdetails = response.body.result;
							this.procuctdetailsIsshow = true
						}

					}, response => {
						console.log(response);
					});
				}

			},
			/*关闭滑动门*/
			closedetails() {
				this.procuctdetailsIsshow = false
			},
			/*页码数据改变*/
			getpage(page) {
				this.page = page;
				this.searchdata();
			},
			routerfun(){
				this.restset();
				this.procuctdetailsIsshow = false;
				/*传过来的选择数据*/
				if(this.$route.query.clientmsg){
					this.senddata = this.$route.query.clientmsg;
				}
				/*传递过来的价格返回数据*/
				if(this.$route.query.pricepushdata){
					this.sendpricedata = this.$route.query.pricepushdata
				}
				/*传递过来的刻字数据*/
				if(this.$route.query.letteringtext){
					this.letteringtext = this.$route.query.letteringtext
				}
				/*传递过来的深度图片数据*/
				if(this.$route.query.images){
					this.images = this.$route.query.images;
				}
				/*传递过来的深度添加数据*/
				if(this.$route.query.datalist){
					this.datalist = this.$route.query.datalist;
				}
			    /*传递过来的深度手寸数据*/
				if(this.$route.query.gj_handsize){
					this.gj_handsize = this.$route.query.gj_handsize;
				}
				/*传递过来的深度刻字数据*/
				if(this.$route.query.gj_lettering){
					this.gj_lettering = this.$route.query.gj_lettering;
				}
				/*传递过来的深度说明数据*/
				if(this.$route.query.gj_cremark){
					this.gj_cremark = this.$route.query.gj_cremark;
				}
		        if(this.$route.query.client){
		          this.client = this.$route.query.client;
		        }
		        if(this.$route.query.pricebefore){
		          this.pricebefore = this.$route.query.pricebefore;
		        }
		        if(this.$route.query.pricebeforetip){
		          this.pricebeforetip = this.$route.query.pricebeforetip;
		        }
		        if(this.$route.query.priceafter){
		          this.priceafter = this.$route.query.priceafter;
		        }
		        if(this.$route.query.priceaftertip){
		          this.priceaftertip = this.$route.query.priceaftertip;
		        }
		        if(this.$route.query.salesman){
		          this.salesman = this.$route.query.salesman;
		        }	
		        if(this.$route.query.gj_order_id){
		          this.gj_order_id = this.$route.query.gj_order_id;
		        }					      
				/*传递过来的裸钻参数*/
				if(this.$route.query.choosediadata){
					this.choosediadata = JSON.parse(this.$route.query.choosediadata)
					this.sliderWeight.min = parseFloat(this.choosediadata.minweight)
					this.sliderWeight.max = parseFloat(this.choosediadata.maxweight)
					if(!this.sliderWeight.min){
						this.sliderWeight.min = 0.1;
					}else{
						this.sliderWeight.value[0] = parseFloat(this.sliderWeight.min.toFixed(1));
					}
					if(!this.sliderWeight.max){
						this.sliderWeight.max = 10;
					}else{
						this.sliderWeight.value[1] = parseFloat(this.sliderWeight.max.toFixed(1));
					}
					// this.sliderWeight.value = [0.1,10.0];
	                //<span v-if="pruductdetails.shape=='ROUND'" class="fc-gray">圆形</span>
                    //<span v-if="pruductdetails.shape=='PRINCESS'" class="fc-gray">公主方</span>
                    //<span v-if="pruductdetails.shape=='EMERALD'" class="fc-gray">祖母绿</span>
                    //<span v-if="pruductdetails.shape=='HEART'" class="fc-gray">心形</span>
                    //<span v-if="pruductdetails.shape=='OVAL'" class="fc-gray">椭圆形</span>
                    //<span v-if="pruductdetails.shape=='PEAR'" class="fc-gray">水滴形</span>
                    //<span v-if="pruductdetails.shape=='MARQUISE'" class="fc-gray">橄榄形</span>
                    //<span v-if="pruductdetails.shape=='ASSCHER'" class="fc-gray">雷蒂恩</span>
                    //<span v-if="pruductdetails.shape=='CUSHION'" class="fc-gray">垫形</span>
                    //<span v-if="pruductdetails.shape=='TRILLION'" class="fc-gray">三角形</span>
     				var shapeListCheck_data = '';
     				if(this.choosediadata.shape == '圆形'){
     					shapeListCheck_data = 'ROUND'
     				}
     				if(this.choosediadata.shape == '公主方'){
     					shapeListCheck_data = 'PRINCESS'
     				}
     				if(this.choosediadata.shape == '祖母绿'){
     					shapeListCheck_data = 'EMERALD'
     				}
     				if(this.choosediadata.shape == '心形'){
     					shapeListCheck_data = 'HEART'
     				}
     				if(this.choosediadata.shape == '椭圆形'){
     					shapeListCheck_data = 'OVAL'
     				}
     				if(this.choosediadata.shape == '水滴形'){
     					shapeListCheck_data = 'PEAR'
     				}
     				if(this.choosediadata.shape == '橄榄形'){
     					shapeListCheck_data = 'MARQUISE'
     				}
     				if(this.choosediadata.shape == '雷蒂恩'){
     					shapeListCheck_data = 'ASSCHER'
     				}
     				if(this.choosediadata.shape == '垫形'){
     					shapeListCheck_data = 'CUSHION'
     				}
     				if(this.choosediadata.shape == '三角形'){
     					shapeListCheck_data = '三角形'
     				}
					this.shapeListCheck.push(shapeListCheck_data)
					
					this.searchdata()
				}else {
					this.initialize()
				}

			}
		},
		watch: {
      // 如果路由有变化，会再次执行该方法
      $route(to, from) {
      	this.routerfun()
      },
  },

}

</script>
<style>
.vue-slider-component .vue-slider-piecewise-dot{
	background-color: transparent!important;
}
.imgbox {
	width: .6rem;
	display: -webkit-inline-box;
	display: inline-block;
}


/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
	transition: all 0.6s ease;
}

.slide-fade-leave-active {
	transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */
{
	transform: translateX(5.6rem);
	right: 0;
	opacity: 0;
}
#app .el-checkbox__label{
	/*display: inline-block;*/
}
</style>

