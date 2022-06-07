# NodeJSPractice
Practice NodeJS App learn from Coursera

### <a name="exports-VS.-module.exports"></a> exports VS. module.exports

dkfndsl <br>
fd<br>
fd<br>
fdf<br>
f<br>
f<br>
f
f<br>
f<br><br>
f<br>
f<br>
f<br>
f<br><br><br><br><br><br>


[exports VS. module.exports] (###exports-VS.-module.exports)
exports và module.exports đều cùng trỏ đến một Object rỗng (module.exports trong đó exports là properties của nó)
Mỗi file js trong nodejs là một module, là một object trong java script
nhưng exports chỉ là refernce đến module.exports thôi
thứ được export thực sự là module.exports khi dùng lệnh import hay require ('')

Nếu exports = 2; thì exports đã trỏ đến một vùng nhớ khác
nên chỉ có thể dùng exports khi thay đổi properties trong Object rỗng
(thằng được export khi dùng lệnh require vì nó là thằng module.exports trỏ đến)

Dùng module.exports = ... khi muốn trả về một Object hay một function khác
