//TODO: Please write code in this file.
function printInventory(inputlist)
{
	var item = loadAllItems();
	var onefreeitem=loadPromotions();
	for(ifree=0;ifree<onefreeitem.length;ifree++)
	{
		if(onefreeitem[ifree].type='BUY_TWO_GET_ONE_FREE')
		var free=onefreeitem[ifree].barcodes;
	}
	var count,bfree,total=0,save=0;									//记录商品购买数目和活动商品数目
	var str='***<没钱赚商店>购物清单***\n';
	var freestr='';
	for (ibarcode=0;ibarcode<6;ibarcode++)    //依次与loadAllItems()里的六种商品比较
	{
		count=0;
		bfree=false;
		for (var i=0;i<inputlist.length;i++)			//依次与input商品清单比较
		{
			var index=inputlist[i].indexOf('-');	//判断并取出商品数量
			if(-1!=index&&(inputlist[i].substring(0,index)=='ITEM00000'+ibarcode))
			{
				count=inputlist[i].substring(index+1);				
			}
			if(inputlist[i]=='ITEM00000'+ibarcode)
			{
				count++;				
				for (var j = 0; j < free.length; j++)
				{
					if (free[j].indexOf(inputlist[i]) > -1&&!bfree)
					{
						bfree=true;						
					}
				}
			}					
		}
		
		if(0!=count)
		{
			if(bfree)
			{
				str+='名称：'+item[ibarcode].name+'，数量：'+count+item[ibarcode].unit+'，单价：'+item[ibarcode].price.toFixed([2]) +'(元)，小计：'+(item[ibarcode].price*(count-1)).toFixed([2])+'(元)\n';
				freestr+='名称：'+item[ibarcode].name+'，数量：'+1+item[ibarcode].unit+'\n';
				total+=parseFloat(item[ibarcode].price*(count-1));
				save+=parseFloat(item[ibarcode].price);
			}
			else
			{
				str+='名称：'+item[ibarcode].name+'，数量：'+count+item[ibarcode].unit+'，单价：'+item[ibarcode].price.toFixed([2]) +'(元)，小计：'+(item[ibarcode].price*count).toFixed([2])+'(元)\n';
				total+=parseFloat(item[ibarcode].price*(count));
			}		
				
		}		
	}
	str+='----------------------\n挥泪赠送商品：\n'+freestr+'----------------------\n'+'总计：'+total.toFixed([2])+'(元)\n'+'节省：'+save.toFixed([2])+'(元)\n'+'**********************';		
	console.log(str);
}