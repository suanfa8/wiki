# 第 2 节 - 找零钱问题

可以使用「贪心算法」的一类经典问题是找零钱问题。

在生活中，我们找给别人零钱，通常都是按照「先给出尽可能多的面值较大的纸币（硬币），然后再给出尽可能多的面值第二大的纸币（硬币）」，直到凑成了我们需要凑出的金额为止，这样找零钱得到的纸币（硬币）的张数（个数）最少。能够这样做，与 **可选的硬币（纸币）的面值密切相关**，大家可以仔细想一想这个问题，相信会是一个非常不错的思考问题。

## 例：「力扣」第 860 题：柠檬水找零

在柠檬水摊上，每一杯柠檬水的售价为 `5` 美元。

顾客排队购买你的产品，（按账单 `bills` 支付的顺序）一次购买一杯。

每位顾客只买一杯柠檬水，然后向你付 `5` 美元、`10` 美元或 `20` 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 `5` 美元。

注意，一开始你手头没有任何零钱。

如果你能给每位顾客正确找零，返回 `true` ，否则返回 `false` 。

**示例 1：**

```
输入：[5,5,5,10,20]
输出：true
解释：
前 3 位顾客那里，我们按顺序收取 3 张 5 美元的钞票。
第 4 位顾客那里，我们收取一张 10 美元的钞票，并返还 5 美元。
第 5 位顾客那里，我们找还一张 10 美元的钞票和一张 5 美元的钞票。
由于所有客户都得到了正确的找零，所以我们输出 true。
```

**示例 2：**

```
输入：[5,5,10]
输出：true
```

**示例 3：**

```
输入：[10,10]
输出：false
```

**示例 4：**

```
输入：[5,5,10,10,20]
输出：false
解释：
前 2 位顾客那里，我们按顺序收取 2 张 5 美元的钞票。
对于接下来的 2 位顾客，我们收取一张 10 美元的钞票，然后返还 5 美元。
对于最后一位顾客，我们无法退回 15 美元，因为我们现在只有两张 10 美元的钞票。
由于不是每位顾客都得到了正确的找零，所以答案是 false。
```

**提示：**

+ `0 <= bills.length <= 10000`
+ `bills[i]` 不是 `5` 就是 `10` 或是 `20` 

（说明：本题解来自官方题解，审核老师在审核的时候可以跳过，上传的老师在上传文件的时候需要删除当前这一行。）

由于顾客只可能给你三个面值的钞票，而且我们一开始没有任何钞票，因此我们拥有的钞票面值只可能是 $5$ 美元，$10$ 美元和 $20$ 美元三种。基于此，我们可以进行如下的分类讨论。

- $5$ 美元，由于柠檬水的价格也为 $5$ 美元，因此我们直接收下即可。

- $10$ 美元，我们需要找回 $5$ 美元，如果没有 $5$ 美元面值的钞票，则无法正确找零。

- $20$ 美元，我们需要找回 $15$ 美元，此时有两种组合方式，一种是一张 $10$ 美元和 $5$ 美元的钞票，一种是 $3$ 张 $5$ 美元的钞票，如果两种组合方式都没有，则无法正确找零。当可以正确找零时，两种找零的方式中我们更倾向于第一种，即如果存在 $5$ 美元和 $10$ 美元，我们就按第一种方式找零，否则按第二种方式找零，因为需要使用 $5$ 美元的找零场景会比需要使用 $10$ 美元的找零场景多，我们需要尽可能保留 $5$ 美元的钞票。

基于此，我们维护两个变量 $\textit{five}$ 和 $\textit{ten}$ 表示当前手中拥有的 $5$ 美元和 $10$ 美元钞票的张数，从前往后遍历数组分类讨论即可。

**参考代码**

```C++ [sol1-C++]
class Solution {
public:
    bool lemonadeChange(vector<int>& bills) {
        int five = 0, ten = 0;
        for (auto& bill: bills) {
            if (bill == 5) {
                five++;
            } else if (bill == 10) {
                if (five == 0) {
                    return false;
                }
                five--;
                ten++;
            } else {
                if (five > 0 && ten > 0) {
                    five--;
                    ten--;
                } else if (five >= 3) {
                    five -= 3;
                } else {
                    return false;
                }
            }
        }
        return true;
    } 
};
```

```Java [sol1-Java]
class Solution {
    public boolean lemonadeChange(int[] bills) {
        int five = 0, ten = 0;
        for (int bill : bills) {
            if (bill == 5) {
                five++;
            } else if (bill == 10) {
                if (five == 0) {
                    return false;
                }
                five--;
                ten++;
            } else {
                if (five > 0 && ten > 0) {
                    five--;
                    ten--;
                } else if (five >= 3) {
                    five -= 3;
                } else {
                    return false;
                }
            }
        }
        return true;
    }
}
```

```JavaScript [sol1-JavaScript]
var lemonadeChange = function(bills) {
    let five = 0, ten = 0;
    for (const bill of bills) {
        if (bill === 5) {
            five += 1;
        } else if (bill === 10) {
            if (five === 0) {
                return false;
            }
            five -= 1;
            ten += 1;
        } else {
            if (five > 0 && ten > 0) {
                five -= 1;
                ten -= 1;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
};
```

```Golang [sol1-Golang]
func lemonadeChange(bills []int) bool {
    five, ten := 0, 0
    for _, bill := range bills {
        if bill == 5 {
            five++
        } else if bill == 10 {
            if five == 0 {
                return false
            }
            five--
            ten++
        } else {
            if five > 0 && ten > 0 {
                five--
                ten--
            } else if five >= 3 {
                five -= 3
            } else {
                return false
            }
        }
    }
    return true
}
```

```C [sol1-C]
bool lemonadeChange(int* bills, int billsSize) {
    int five = 0, ten = 0;
    for (int i = 0; i < billsSize; i++) {
        if (bills[i] == 5) {
            five++;
        } else if (bills[i] == 10) {
            if (five == 0) {
                return false;
            }
            five--;
            ten++;
        } else {
            if (five > 0 && ten > 0) {
                five--;
                ten--;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
}
```

**复杂度分析**

* 时间复杂度：$O(N)$，其中 $N$ 是 $\textit{bills}$ 的长度。
* 空间复杂度：$O(1)$。

**总结**：这道问题之所以可以使用「贪心算法」，完全是因为可以选择的钞票面值只有  $5$ 美元，$10$ 美元和 $20$ 美元。大家还可以完成「力扣」第 322 题（零钱兑换），思考这道问题为什么不可以使用贪心算法。














