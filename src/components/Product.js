import React, { useState } from "react";
import "./product.css";
import { Link } from "react-router-dom";

function Product() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    <div>
      <div className="main-container">
        <div className="icon-btns">
          <div></div>
          <div className="icons-row">
            <div className="icons">
              <div className="icon-bg">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS/SURBVHgB1VlNcuJWEO5+gF1OFvENRnMC4xMYbmBOEChjV2XFeJGZIVlYbOKBjYdVqsa4ICeY5ASQEww+gZUbeJX5Ab2e7icEEggjfszPV2VbetaTPj31z9f9EP68tjCVaAJQBrYe+IiILX326yVi412bBzKwQyCtCypMGh8JqcUHzsTF3nh3YhyoQwB/wzqRwBMVPKeeewxnbwuU2DuWlxiO8xua8eIbHqfOcFxepvg2C8U3OX6BOqwRQeKP8EvZMUeFSyatR6urUm3/kFf3fjju0r/DY6QurBFs41UanSibDb8Ct9cZPm6PxtkhvrkVSILF4+zIYA3+1aWezplrUuZ6C9YA+dIh4rsCIa5gR5HkH4dI/wW7BMQXAI1aG3YNd++aO20qs9G0D5X+sUREGY71hWHY3CBmr7iERvfgE/uBLXqGw96Duqs1RePABjGd+IdaGtn+B/HcCv6LVz5v4vZt9RVsCNHEZZUVfZqhGDkZwQ1uyLknid9d55VKnnBWkozoTJ/Kgox0haBfN6azZkSuuNgzAtywuKoQssAaewFRg0RuTmHiBULiI21Ayz8VVSxUrEvIJCghn+HAf8Liq64wdUSAQvgQNoQ44VCEVdsILfV/bhBhLNgwYicgiSTQ30/DmhTgLMRLQIuCExfo/VMF6ggGZqU1/cd/OnBe7sASeB7ikgMU3HChkZFTTzej9xvN3ytoVB1xfrgot2ABTJrKN+jMqRYdU9r5N2zUSjFygMA4P9cDD4tk4UniokPOy3mubF5SoL6cxCCOJz4f+59d3VWveM77ietY+HsxX9cj7mmZLDwn+emm4gmpLHFCQlJXEHBKUySrz5dQsIcFtSQuIrBDhLV7GWUKJCSTYHO0+jlA/iM17WzongsR93FWbrGNtlgG2OahpLmqH3MsaSp5L+fDYRWZnaoivfE83V47TN6fl4b+gWgfG2Igvh4/L9vGJKKiQZJOIfhFejobS/ryPYNtDfbbkolEMbCSQgIxUfKPjRnNo9cT+3agh3MIvf3TONOWJ968kRWyhueuO19jaKKHg+k405Yn3v8SftDF73M3hjgrjxpLFC8zr7bmxKdk8FNQo0iC6qdYMxCWBOnRQ2W1YjpXGDr+nEG8V5wU7pcqwVI/OKFzT4jNBTRy2Ye+n3qhFO17qiQ9SzTO5X61efgIFoKuI/DNhu1q7FDxdTb2dLOxoB78U5MnECVKRXwFjj5a/yNJbWlLMeAvJvXn8OHg5qD4W6yeudEqo6jkcCv7ZZx5q3HO5F4LAuUdl3NNaPzxdDyWz96oBTu/YNRiTKxmxQVGyooqDNxcqia3Vw+FSHHe/kHeZMlQUcLaBugVbxLEUqarIy74wIJMqYiK32RGJk8WRFdQXVaZWdU/eE+IHA4pPUs2rDaOs9OQRt5uGY/nUv0YfW5FzOqy0OoYVaiA7d3TPbOk7mpXPIgIORx4LJsFp3miiog2dVttkWkdTxQfzrSVfz7iPtj2OVtYgIMko/lrJL92g7rbFCA0Vc5Gkn9+4nHg1ahtmN6n6Xo7fiNsR3/84nWXNGSDW5RjSEs/MziwPY39WeRRhb7Gdu1ITCfvQE+H5PL2baUIed7hpsH2u9ly15gbd87vt8ssHQcfjvYAAAAASUVORK5CYII="
                  alt=""
                ></img>
              </div>
              <span>Find Equipment</span>
            </div>
            <div className="icons">
              <div className="icon-bg">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                ></img>
              </div>
              <span>Find Equipment</span>
            </div>
            <div className="icons">
              <div className="icon-bg">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS/SURBVHgB1VlNcuJWEO5+gF1OFvENRnMC4xMYbmBOEChjV2XFeJGZIVlYbOKBjYdVqsa4ICeY5ASQEww+gZUbeJX5Ab2e7icEEggjfszPV2VbetaTPj31z9f9EP68tjCVaAJQBrYe+IiILX326yVi412bBzKwQyCtCypMGh8JqcUHzsTF3nh3YhyoQwB/wzqRwBMVPKeeewxnbwuU2DuWlxiO8xua8eIbHqfOcFxepvg2C8U3OX6BOqwRQeKP8EvZMUeFSyatR6urUm3/kFf3fjju0r/DY6QurBFs41UanSibDb8Ct9cZPm6PxtkhvrkVSILF4+zIYA3+1aWezplrUuZ6C9YA+dIh4rsCIa5gR5HkH4dI/wW7BMQXAI1aG3YNd++aO20qs9G0D5X+sUREGY71hWHY3CBmr7iERvfgE/uBLXqGw96Duqs1RePABjGd+IdaGtn+B/HcCv6LVz5v4vZt9RVsCNHEZZUVfZqhGDkZwQ1uyLknid9d55VKnnBWkozoTJ/Kgox0haBfN6azZkSuuNgzAtywuKoQssAaewFRg0RuTmHiBULiI21Ayz8VVSxUrEvIJCghn+HAf8Liq64wdUSAQvgQNoQ44VCEVdsILfV/bhBhLNgwYicgiSTQ30/DmhTgLMRLQIuCExfo/VMF6ggGZqU1/cd/OnBe7sASeB7ikgMU3HChkZFTTzej9xvN3ytoVB1xfrgot2ABTJrKN+jMqRYdU9r5N2zUSjFygMA4P9cDD4tk4UniokPOy3mubF5SoL6cxCCOJz4f+59d3VWveM77ietY+HsxX9cj7mmZLDwn+emm4gmpLHFCQlJXEHBKUySrz5dQsIcFtSQuIrBDhLV7GWUKJCSTYHO0+jlA/iM17WzongsR93FWbrGNtlgG2OahpLmqH3MsaSp5L+fDYRWZnaoivfE83V47TN6fl4b+gWgfG2Igvh4/L9vGJKKiQZJOIfhFejobS/ryPYNtDfbbkolEMbCSQgIxUfKPjRnNo9cT+3agh3MIvf3TONOWJ968kRWyhueuO19jaKKHg+k405Yn3v8SftDF73M3hjgrjxpLFC8zr7bmxKdk8FNQo0iC6qdYMxCWBOnRQ2W1YjpXGDr+nEG8V5wU7pcqwVI/OKFzT4jNBTRy2Ye+n3qhFO17qiQ9SzTO5X61efgIFoKuI/DNhu1q7FDxdTb2dLOxoB78U5MnECVKRXwFjj5a/yNJbWlLMeAvJvXn8OHg5qD4W6yeudEqo6jkcCv7ZZx5q3HO5F4LAuUdl3NNaPzxdDyWz96oBTu/YNRiTKxmxQVGyooqDNxcqia3Vw+FSHHe/kHeZMlQUcLaBugVbxLEUqarIy74wIJMqYiK32RGJk8WRFdQXVaZWdU/eE+IHA4pPUs2rDaOs9OQRt5uGY/nUv0YfW5FzOqy0OoYVaiA7d3TPbOk7mpXPIgIORx4LJsFp3miiog2dVttkWkdTxQfzrSVfz7iPtj2OVtYgIMko/lrJL92g7rbFCA0Vc5Gkn9+4nHg1ahtmN6n6Xo7fiNsR3/84nWXNGSDW5RjSEs/MziwPY39WeRRhb7Gdu1ITCfvQE+H5PL2baUIed7hpsH2u9ly15gbd87vt8ssHQcfjvYAAAAASUVORK5CYII="
                  alt=""
                ></img>
              </div>
              <span>Find Equipment</span>
            </div>
            <div className="icons">
              <div className="icon-bg">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS/SURBVHgB1VlNcuJWEO5+gF1OFvENRnMC4xMYbmBOEChjV2XFeJGZIVlYbOKBjYdVqsa4ICeY5ASQEww+gZUbeJX5Ab2e7icEEggjfszPV2VbetaTPj31z9f9EP68tjCVaAJQBrYe+IiILX326yVi412bBzKwQyCtCypMGh8JqcUHzsTF3nh3YhyoQwB/wzqRwBMVPKeeewxnbwuU2DuWlxiO8xua8eIbHqfOcFxepvg2C8U3OX6BOqwRQeKP8EvZMUeFSyatR6urUm3/kFf3fjju0r/DY6QurBFs41UanSibDb8Ct9cZPm6PxtkhvrkVSILF4+zIYA3+1aWezplrUuZ6C9YA+dIh4rsCIa5gR5HkH4dI/wW7BMQXAI1aG3YNd++aO20qs9G0D5X+sUREGY71hWHY3CBmr7iERvfgE/uBLXqGw96Duqs1RePABjGd+IdaGtn+B/HcCv6LVz5v4vZt9RVsCNHEZZUVfZqhGDkZwQ1uyLknid9d55VKnnBWkozoTJ/Kgox0haBfN6azZkSuuNgzAtywuKoQssAaewFRg0RuTmHiBULiI21Ayz8VVSxUrEvIJCghn+HAf8Liq64wdUSAQvgQNoQ44VCEVdsILfV/bhBhLNgwYicgiSTQ30/DmhTgLMRLQIuCExfo/VMF6ggGZqU1/cd/OnBe7sASeB7ikgMU3HChkZFTTzej9xvN3ytoVB1xfrgot2ABTJrKN+jMqRYdU9r5N2zUSjFygMA4P9cDD4tk4UniokPOy3mubF5SoL6cxCCOJz4f+59d3VWveM77ietY+HsxX9cj7mmZLDwn+emm4gmpLHFCQlJXEHBKUySrz5dQsIcFtSQuIrBDhLV7GWUKJCSTYHO0+jlA/iM17WzongsR93FWbrGNtlgG2OahpLmqH3MsaSp5L+fDYRWZnaoivfE83V47TN6fl4b+gWgfG2Igvh4/L9vGJKKiQZJOIfhFejobS/ryPYNtDfbbkolEMbCSQgIxUfKPjRnNo9cT+3agh3MIvf3TONOWJ968kRWyhueuO19jaKKHg+k405Yn3v8SftDF73M3hjgrjxpLFC8zr7bmxKdk8FNQo0iC6qdYMxCWBOnRQ2W1YjpXGDr+nEG8V5wU7pcqwVI/OKFzT4jNBTRy2Ye+n3qhFO17qiQ9SzTO5X61efgIFoKuI/DNhu1q7FDxdTb2dLOxoB78U5MnECVKRXwFjj5a/yNJbWlLMeAvJvXn8OHg5qD4W6yeudEqo6jkcCv7ZZx5q3HO5F4LAuUdl3NNaPzxdDyWz96oBTu/YNRiTKxmxQVGyooqDNxcqia3Vw+FSHHe/kHeZMlQUcLaBugVbxLEUqarIy74wIJMqYiK32RGJk8WRFdQXVaZWdU/eE+IHA4pPUs2rDaOs9OQRt5uGY/nUv0YfW5FzOqy0OoYVaiA7d3TPbOk7mpXPIgIORx4LJsFp3miiog2dVttkWkdTxQfzrSVfz7iPtj2OVtYgIMko/lrJL92g7rbFCA0Vc5Gkn9+4nHg1ahtmN6n6Xo7fiNsR3/84nWXNGSDW5RjSEs/MziwPY39WeRRhb7Gdu1ITCfvQE+H5PL2baUIed7hpsH2u9ly15gbd87vt8ssHQcfjvYAAAAASUVORK5CYII="
                  alt=""
                ></img>
              </div>
              <span>Find Equipment</span>
            </div>
            <div className="icons">
              <div className="icon-bg">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS/SURBVHgB1VlNcuJWEO5+gF1OFvENRnMC4xMYbmBOEChjV2XFeJGZIVlYbOKBjYdVqsa4ICeY5ASQEww+gZUbeJX5Ab2e7icEEggjfszPV2VbetaTPj31z9f9EP68tjCVaAJQBrYe+IiILX326yVi412bBzKwQyCtCypMGh8JqcUHzsTF3nh3YhyoQwB/wzqRwBMVPKeeewxnbwuU2DuWlxiO8xua8eIbHqfOcFxepvg2C8U3OX6BOqwRQeKP8EvZMUeFSyatR6urUm3/kFf3fjju0r/DY6QurBFs41UanSibDb8Ct9cZPm6PxtkhvrkVSILF4+zIYA3+1aWezplrUuZ6C9YA+dIh4rsCIa5gR5HkH4dI/wW7BMQXAI1aG3YNd++aO20qs9G0D5X+sUREGY71hWHY3CBmr7iERvfgE/uBLXqGw96Duqs1RePABjGd+IdaGtn+B/HcCv6LVz5v4vZt9RVsCNHEZZUVfZqhGDkZwQ1uyLknid9d55VKnnBWkozoTJ/Kgox0haBfN6azZkSuuNgzAtywuKoQssAaewFRg0RuTmHiBULiI21Ayz8VVSxUrEvIJCghn+HAf8Liq64wdUSAQvgQNoQ44VCEVdsILfV/bhBhLNgwYicgiSTQ30/DmhTgLMRLQIuCExfo/VMF6ggGZqU1/cd/OnBe7sASeB7ikgMU3HChkZFTTzej9xvN3ytoVB1xfrgot2ABTJrKN+jMqRYdU9r5N2zUSjFygMA4P9cDD4tk4UniokPOy3mubF5SoL6cxCCOJz4f+59d3VWveM77ietY+HsxX9cj7mmZLDwn+emm4gmpLHFCQlJXEHBKUySrz5dQsIcFtSQuIrBDhLV7GWUKJCSTYHO0+jlA/iM17WzongsR93FWbrGNtlgG2OahpLmqH3MsaSp5L+fDYRWZnaoivfE83V47TN6fl4b+gWgfG2Igvh4/L9vGJKKiQZJOIfhFejobS/ryPYNtDfbbkolEMbCSQgIxUfKPjRnNo9cT+3agh3MIvf3TONOWJ968kRWyhueuO19jaKKHg+k405Yn3v8SftDF73M3hjgrjxpLFC8zr7bmxKdk8FNQo0iC6qdYMxCWBOnRQ2W1YjpXGDr+nEG8V5wU7pcqwVI/OKFzT4jNBTRy2Ye+n3qhFO17qiQ9SzTO5X61efgIFoKuI/DNhu1q7FDxdTb2dLOxoB78U5MnECVKRXwFjj5a/yNJbWlLMeAvJvXn8OHg5qD4W6yeudEqo6jkcCv7ZZx5q3HO5F4LAuUdl3NNaPzxdDyWz96oBTu/YNRiTKxmxQVGyooqDNxcqia3Vw+FSHHe/kHeZMlQUcLaBugVbxLEUqarIy74wIJMqYiK32RGJk8WRFdQXVaZWdU/eE+IHA4pPUs2rDaOs9OQRt5uGY/nUv0YfW5FzOqy0OoYVaiA7d3TPbOk7mpXPIgIORx4LJsFp3miiog2dVttkWkdTxQfzrSVfz7iPtj2OVtYgIMko/lrJL92g7rbFCA0Vc5Gkn9+4nHg1ahtmN6n6Xo7fiNsR3/84nWXNGSDW5RjSEs/MziwPY39WeRRhb7Gdu1ITCfvQE+H5PL2baUIed7hpsH2u9ly15gbd87vt8ssHQcfjvYAAAAASUVORK5CYII="
                  alt=""
                ></img>
              </div>
              <span>Find Equipment</span>
            </div>
            <div className="icons">
              <div className="icon-bg">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS/SURBVHgB1VlNcuJWEO5+gF1OFvENRnMC4xMYbmBOEChjV2XFeJGZIVlYbOKBjYdVqsa4ICeY5ASQEww+gZUbeJX5Ab2e7icEEggjfszPV2VbetaTPj31z9f9EP68tjCVaAJQBrYe+IiILX326yVi412bBzKwQyCtCypMGh8JqcUHzsTF3nh3YhyoQwB/wzqRwBMVPKeeewxnbwuU2DuWlxiO8xua8eIbHqfOcFxepvg2C8U3OX6BOqwRQeKP8EvZMUeFSyatR6urUm3/kFf3fjju0r/DY6QurBFs41UanSibDb8Ct9cZPm6PxtkhvrkVSILF4+zIYA3+1aWezplrUuZ6C9YA+dIh4rsCIa5gR5HkH4dI/wW7BMQXAI1aG3YNd++aO20qs9G0D5X+sUREGY71hWHY3CBmr7iERvfgE/uBLXqGw96Duqs1RePABjGd+IdaGtn+B/HcCv6LVz5v4vZt9RVsCNHEZZUVfZqhGDkZwQ1uyLknid9d55VKnnBWkozoTJ/Kgox0haBfN6azZkSuuNgzAtywuKoQssAaewFRg0RuTmHiBULiI21Ayz8VVSxUrEvIJCghn+HAf8Liq64wdUSAQvgQNoQ44VCEVdsILfV/bhBhLNgwYicgiSTQ30/DmhTgLMRLQIuCExfo/VMF6ggGZqU1/cd/OnBe7sASeB7ikgMU3HChkZFTTzej9xvN3ytoVB1xfrgot2ABTJrKN+jMqRYdU9r5N2zUSjFygMA4P9cDD4tk4UniokPOy3mubF5SoL6cxCCOJz4f+59d3VWveM77ietY+HsxX9cj7mmZLDwn+emm4gmpLHFCQlJXEHBKUySrz5dQsIcFtSQuIrBDhLV7GWUKJCSTYHO0+jlA/iM17WzongsR93FWbrGNtlgG2OahpLmqH3MsaSp5L+fDYRWZnaoivfE83V47TN6fl4b+gWgfG2Igvh4/L9vGJKKiQZJOIfhFejobS/ryPYNtDfbbkolEMbCSQgIxUfKPjRnNo9cT+3agh3MIvf3TONOWJ968kRWyhueuO19jaKKHg+k405Yn3v8SftDF73M3hjgrjxpLFC8zr7bmxKdk8FNQo0iC6qdYMxCWBOnRQ2W1YjpXGDr+nEG8V5wU7pcqwVI/OKFzT4jNBTRy2Ye+n3qhFO17qiQ9SzTO5X61efgIFoKuI/DNhu1q7FDxdTb2dLOxoB78U5MnECVKRXwFjj5a/yNJbWlLMeAvJvXn8OHg5qD4W6yeudEqo6jkcCv7ZZx5q3HO5F4LAuUdl3NNaPzxdDyWz96oBTu/YNRiTKxmxQVGyooqDNxcqia3Vw+FSHHe/kHeZMlQUcLaBugVbxLEUqarIy74wIJMqYiK32RGJk8WRFdQXVaZWdU/eE+IHA4pPUs2rDaOs9OQRt5uGY/nUv0YfW5FzOqy0OoYVaiA7d3TPbOk7mpXPIgIORx4LJsFp3miiog2dVttkWkdTxQfzrSVfz7iPtj2OVtYgIMko/lrJL92g7rbFCA0Vc5Gkn9+4nHg1ahtmN6n6Xo7fiNsR3/84nWXNGSDW5RjSEs/MziwPY39WeRRhb7Gdu1ITCfvQE+H5PL2baUIed7hpsH2u9ly15gbd87vt8ssHQcfjvYAAAAASUVORK5CYII="
                  alt=""
                ></img>
              </div>
              <span>Find Equipment</span>
            </div>
            <div className="icons">
              <div className="icon-bg">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS/SURBVHgB1VlNcuJWEO5+gF1OFvENRnMC4xMYbmBOEChjV2XFeJGZIVlYbOKBjYdVqsa4ICeY5ASQEww+gZUbeJX5Ab2e7icEEggjfszPV2VbetaTPj31z9f9EP68tjCVaAJQBrYe+IiILX326yVi412bBzKwQyCtCypMGh8JqcUHzsTF3nh3YhyoQwB/wzqRwBMVPKeeewxnbwuU2DuWlxiO8xua8eIbHqfOcFxepvg2C8U3OX6BOqwRQeKP8EvZMUeFSyatR6urUm3/kFf3fjju0r/DY6QurBFs41UanSibDb8Ct9cZPm6PxtkhvrkVSILF4+zIYA3+1aWezplrUuZ6C9YA+dIh4rsCIa5gR5HkH4dI/wW7BMQXAI1aG3YNd++aO20qs9G0D5X+sUREGY71hWHY3CBmr7iERvfgE/uBLXqGw96Duqs1RePABjGd+IdaGtn+B/HcCv6LVz5v4vZt9RVsCNHEZZUVfZqhGDkZwQ1uyLknid9d55VKnnBWkozoTJ/Kgox0haBfN6azZkSuuNgzAtywuKoQssAaewFRg0RuTmHiBULiI21Ayz8VVSxUrEvIJCghn+HAf8Liq64wdUSAQvgQNoQ44VCEVdsILfV/bhBhLNgwYicgiSTQ30/DmhTgLMRLQIuCExfo/VMF6ggGZqU1/cd/OnBe7sASeB7ikgMU3HChkZFTTzej9xvN3ytoVB1xfrgot2ABTJrKN+jMqRYdU9r5N2zUSjFygMA4P9cDD4tk4UniokPOy3mubF5SoL6cxCCOJz4f+59d3VWveM77ietY+HsxX9cj7mmZLDwn+emm4gmpLHFCQlJXEHBKUySrz5dQsIcFtSQuIrBDhLV7GWUKJCSTYHO0+jlA/iM17WzongsR93FWbrGNtlgG2OahpLmqH3MsaSp5L+fDYRWZnaoivfE83V47TN6fl4b+gWgfG2Igvh4/L9vGJKKiQZJOIfhFejobS/ryPYNtDfbbkolEMbCSQgIxUfKPjRnNo9cT+3agh3MIvf3TONOWJ968kRWyhueuO19jaKKHg+k405Yn3v8SftDF73M3hjgrjxpLFC8zr7bmxKdk8FNQo0iC6qdYMxCWBOnRQ2W1YjpXGDr+nEG8V5wU7pcqwVI/OKFzT4jNBTRy2Ye+n3qhFO17qiQ9SzTO5X61efgIFoKuI/DNhu1q7FDxdTb2dLOxoB78U5MnECVKRXwFjj5a/yNJbWlLMeAvJvXn8OHg5qD4W6yeudEqo6jkcCv7ZZx5q3HO5F4LAuUdl3NNaPzxdDyWz96oBTu/YNRiTKxmxQVGyooqDNxcqia3Vw+FSHHe/kHeZMlQUcLaBugVbxLEUqarIy74wIJMqYiK32RGJk8WRFdQXVaZWdU/eE+IHA4pPUs2rDaOs9OQRt5uGY/nUv0YfW5FzOqy0OoYVaiA7d3TPbOk7mpXPIgIORx4LJsFp3miiog2dVttkWkdTxQfzrSVfz7iPtj2OVtYgIMko/lrJL92g7rbFCA0Vc5Gkn9+4nHg1ahtmN6n6Xo7fiNsR3/84nWXNGSDW5RjSEs/MziwPY39WeRRhb7Gdu1ITCfvQE+H5PL2baUIed7hpsH2u9ly15gbd87vt8ssHQcfjvYAAAAASUVORK5CYII="
                  alt=""
                ></img>
              </div>
              <span>Find Equipment</span>
            </div>
          </div>
        </div>
        <div className="path-row">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE+SURBVHgB7ZRNTsJAGIbfbwoxuuIIcwSPADegJxCSQuJKm7iwuoAdARfElYlCxBPADewNyhHqDdjT9nMGYrQG25GWHc+inczfO/PkyxBMeR6dk8CYET3CuVuYLhNGkyajKxIcAFwnWHMxfejBEMocfe3XRHymTs2tHaNLXic2Lr0QewVslPBctST+JmTEbpaynYq2SvCes7lG5ilL30ArSU57zLjGvyGf13H7t7LvgKeBpKowOXUWISeRje798qtjo8iaDC+oagUFN9dIEpXgpzIS0+F4q4RWqgxrKI+FqjJXJMykytBnjm2UAOvy5eRNNZuwUBewTvpwbhuIEKIUlImO11IhDXS9mUDbXeEQdDxf/4yeiiJUTCZpr+qbuimBJAyqzihAFXITzs1HKvRlMCMSMm/lwRUdA44BxfkEL7dtROpwIGgAAAAASUVORK5CYII="
            alt="..."
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAcCAYAAACUJBTQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGTSURBVHgB7ZRNTsJAFMffvAKJrjhCj1BvADeQG7QRTVyJG5EVdWEIuNGVCdggJ+AI9QbWG3AEdi6k83zTQsNgC7U7Tf/JZNp57fvN+5gBKFXqT0ukLeLL6IqAbPqSLbjsLTTj88AUVZwTwCO0uzPIIUxbZECDJ4ud+TB165qxBrFNQcb3FhSGGDWHpwUPU4RHvmY8673yJp74qS6w4qvIoAgEnOslp6q5BlnojaaavX3bEQSzCKSiPQDCTAvXIgaJJRHZ6D30t82yUuvwFICKlmv0I625IBuQBBUREElXA8XRtmAdrQiP58UgShc3AUnpbEAwGTS0TSRp5WaZDN1iEJaBSMkLgZn5oaDUlAk4pPHIEkjvkX+COzjvuoktPjOq+0weAbW7J2kuKnsBygmCnwrgQosQ52vAgozPZpYb3AuIdkl1Uu26DWBxoVVbWxFA1cVxl7+D7KSBAbb2kzfkLqPTBLB79eSBYNXoQ1YavIHNkbnR+ZGidQiQCZG0+uCr4y01DaERkCoyrBzV3lCq1P/XN0vjtc/kfQWdAAAAAElFTkSuQmCC"
            alt="..."
          ></img>
          <a class="" href="/">
            sdfs
          </a>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAcCAYAAACUJBTQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGTSURBVHgB7ZRNTsJAFMffvAKJrjhCj1BvADeQG7QRTVyJG5EVdWEIuNGVCdggJ+AI9QbWG3AEdi6k83zTQsNgC7U7Tf/JZNp57fvN+5gBKFXqT0ukLeLL6IqAbPqSLbjsLTTj88AUVZwTwCO0uzPIIUxbZECDJ4ud+TB165qxBrFNQcb3FhSGGDWHpwUPU4RHvmY8673yJp74qS6w4qvIoAgEnOslp6q5BlnojaaavX3bEQSzCKSiPQDCTAvXIgaJJRHZ6D30t82yUuvwFICKlmv0I625IBuQBBUREElXA8XRtmAdrQiP58UgShc3AUnpbEAwGTS0TSRp5WaZDN1iEJaBSMkLgZn5oaDUlAk4pPHIEkjvkX+COzjvuoktPjOq+0weAbW7J2kuKnsBygmCnwrgQosQ52vAgozPZpYb3AuIdkl1Uu26DWBxoVVbWxFA1cVxl7+D7KSBAbb2kzfkLqPTBLB79eSBYNXoQ1YavIHNkbnR+ZGidQiQCZG0+uCr4y01DaERkCoyrBzV3lCq1P/XN0vjtc/kfQWdAAAAAElFTkSuQmCC"
            alt="..."
          ></img>
          <a class="" href="/">
            sdfs
          </a>
        </div>
        <div className="container d-flex">
          <div className="product-img">
            <div className="image"></div>
            <div className="img-carousel">
              <img
                className="arrow"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFgSURBVHgB7dqhTkNBEIXhc4HUgiEV8AAYGlxVUWARPAdvUIOp4B14CzDoqtriMaSiYMCQBgM9ogRxESQ7Oydz51drv+yayWzT3N58oUNtoWMlOHoJjl6Co5fg6CU4egn27uroBA9nlxgfD2HRDoQaD4Y/0FH/EHfPT5i/vaJkMjf8G7tpt9dD6STAbdjJfIbpywKlcwf/hZ08zmCRK7g2lrmBPbDMBeyFZdXBnlhWFeyNZdXAClhWBayCZeZgJSwzBathmRlYEctMwKpYVhzMsU4Vy4qD3z9XUG67uTi/RsGWqw+gAU7XN71pc7YY9/5bcTCbLheyaBMwU0WbgZki2hTM1NDmYKaErgJmKuhqYKaArgpm3ujqYOaJdgEzL7QbmHmgXcGsNlpit9Q2PnKmHuzto3Qy28M2tMX2UGo/TDQb9Q9wv94NWzzpJr8PBy/B0Utw9BIcvQRHL8HR6xz4G8Wk1dBjITW9AAAAAElFTkSuQmCC"
                alt=""
              ></img>
              <img
                src="http://13.234.30.40:3000/static/media/pngwing.com.00d18c18c60ff5cd82c0.png"
                alt="..."
              />
              <img
                src="http://13.234.30.40:3000/static/media/pngwing.com.00d18c18c60ff5cd82c0.png"
                alt="..."
              />
              <img
                src="http://13.234.30.40:3000/static/media/pngwing.com.00d18c18c60ff5cd82c0.png"
                alt="..."
              />
              <img
                src="http://13.234.30.40:3000/static/media/pngwing.com.00d18c18c60ff5cd82c0.png"
                alt="..."
              />
              <img
                className="arrow"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFfSURBVHgB7doxSkNBEMbxWZW02oiNB7AxCBapTKWthefwBmlsUihY2nkR61QpBFEQL5AidjYS0iR8kARCkm5n5mPe/OHBvvLHvGZ3XymvjzNpUHvSsBIcvQRHL8HRS3D0Ehy9BNfo/uxC3q7vpHfeEbYOpHJXJ6fydNldrVH/aygsVZ/w33Sy9t5rd6gmvV9ubx6kYuPJv0gR6S6mi5brwe9IvKsORoPxiBatAkasaDUwYkSrghEbWh2MmNAmYMSCNgMjBrQpGHmjzcHIE+0CRl5oNzDyQLuCkTWa4gCg/znc2EJil9U+OpbaUZ94HLZaUjsK8LY9M6Ye8pPehdU6JXEFW2ORG9gDi1zAXlhkDvbEIlOwNxaZgRmwyATMgkXqYCYsUgWzYZEamBGLVMCsWFQdjBtDVixSvz1kwiK120M8Lz8f8vz9LkyV/H04eAmOXoKjl+DoJTh6CY5e48Bz8YDWB9/LXB0AAAAASUVORK5CYII="
                alt=""
              ></img>
            </div>
          </div>
          <div className="pro-des">
            <div className="pro-des-head">
              <div>
                <div className="ser-btn">
                  <span>SERVICES</span>
                </div>
                <div>
                  <span className="model-no.">XM-101011QR</span>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBlVLBTQMxEJxdEhHxugPB+1IBhgYgHaQD6IB8IUIxjyhlQCqADkgF4A64vJCQUPLhg8Qu9kWR7hB2YCRrvd4Zz9paIIG3sTGpOscKrxNTtIjvF9Zk/xZ3wGc+FNLmQYxDMddt8CMUhU+X9Cnd3LrlRucX32bluhIGZNLh0W8mFD6lzXzhyf5tahRUINqmlj6UAnKsMuWDoXMimCvQTwkDQt2v07DJva5qe2/4ZFVxgz8g8Dx/sOqkhvfxsSXCaIPQrvPGh31BHpDAjuptPW+ISZClxB+sR1Exb/GPcdRZ43JwEXcGTqpIuAuDsXv13COSrkKnFZlwWOe3Gj6KuYj09q/dbH2WX7rSh/PFxFhR7tf53yxiYcFMmoJlAAAAAElFTkSuQmCC"
                    alt=""
                  ></img>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBlVLBTQMxEJxdEhHxugPB+1IBhgYgHaQD6IB8IUIxjyhlQCqADkgF4A64vJCQUPLhg8Qu9kWR7hB2YCRrvd4Zz9paIIG3sTGpOscKrxNTtIjvF9Zk/xZ3wGc+FNLmQYxDMddt8CMUhU+X9Cnd3LrlRucX32bluhIGZNLh0W8mFD6lzXzhyf5tahRUINqmlj6UAnKsMuWDoXMimCvQTwkDQt2v07DJva5qe2/4ZFVxgz8g8Dx/sOqkhvfxsSXCaIPQrvPGh31BHpDAjuptPW+ISZClxB+sR1Exb/GPcdRZ43JwEXcGTqpIuAuDsXv13COSrkKnFZlwWOe3Gj6KuYj09q/dbH2WX7rSh/PFxFhR7tf53yxiYcFMmoJlAAAAAElFTkSuQmCC"
                    alt=""
                  ></img>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBlVLBTQMxEJxdEhHxugPB+1IBhgYgHaQD6IB8IUIxjyhlQCqADkgF4A64vJCQUPLhg8Qu9kWR7hB2YCRrvd4Zz9paIIG3sTGpOscKrxNTtIjvF9Zk/xZ3wGc+FNLmQYxDMddt8CMUhU+X9Cnd3LrlRucX32bluhIGZNLh0W8mFD6lzXzhyf5tahRUINqmlj6UAnKsMuWDoXMimCvQTwkDQt2v07DJva5qe2/4ZFVxgz8g8Dx/sOqkhvfxsSXCaIPQrvPGh31BHpDAjuptPW+ISZClxB+sR1Exb/GPcdRZ43JwEXcGTqpIuAuDsXv13COSrkKnFZlwWOe3Gj6KuYj09q/dbH2WX7rSh/PFxFhR7tf53yxiYcFMmoJlAAAAAElFTkSuQmCC"
                    alt=""
                  ></img>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBlVLBTQMxEJxdEhHxugPB+1IBhgYgHaQD6IB8IUIxjyhlQCqADkgF4A64vJCQUPLhg8Qu9kWR7hB2YCRrvd4Zz9paIIG3sTGpOscKrxNTtIjvF9Zk/xZ3wGc+FNLmQYxDMddt8CMUhU+X9Cnd3LrlRucX32bluhIGZNLh0W8mFD6lzXzhyf5tahRUINqmlj6UAnKsMuWDoXMimCvQTwkDQt2v07DJva5qe2/4ZFVxgz8g8Dx/sOqkhvfxsSXCaIPQrvPGh31BHpDAjuptPW+ISZClxB+sR1Exb/GPcdRZ43JwEXcGTqpIuAuDsXv13COSrkKnFZlwWOe3Gj6KuYj09q/dbH2WX7rSh/PFxFhR7tf53yxiYcFMmoJlAAAAAElFTkSuQmCC"
                    alt=""
                  ></img>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBlVLBTQMxEJxdEhHxugPB+1IBhgYgHaQD6IB8IUIxjyhlQCqADkgF4A64vJCQUPLhg8Qu9kWR7hB2YCRrvd4Zz9paIIG3sTGpOscKrxNTtIjvF9Zk/xZ3wGc+FNLmQYxDMddt8CMUhU+X9Cnd3LrlRucX32bluhIGZNLh0W8mFD6lzXzhyf5tahRUINqmlj6UAnKsMuWDoXMimCvQTwkDQt2v07DJva5qe2/4ZFVxgz8g8Dx/sOqkhvfxsSXCaIPQrvPGh31BHpDAjuptPW+ISZClxB+sR1Exb/GPcdRZ43JwEXcGTqpIuAuDsXv13COSrkKnFZlwWOe3Gj6KuYj09q/dbH2WX7rSh/PFxFhR7tf53yxiYcFMmoJlAAAAAElFTkSuQmCC"
                    alt=""
                  ></img>
                </div>
              </div>
              <div className="share-btn">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAAAsCAYAAABCIttgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUvSURBVHgB7ZpPbBtFFMbfOCjpoRBDpUIPxBbCubRVnFAJRKFxEy5NhRJfoD3ZCaJwgxyQygXXp6qn0iOCJs6JciGJKsoBkjpVkYIESRH0QhC1wyEICSlpc2gr1ct8E4+z2V0ni+Ox0/j9JMe7653x7Mz3/sxzBGk+Px8Toiklj6JEVpCYXYzIWoVHY3Tm44w6w5/A5Qspy6JzxDQUQgTOFd75KC3o8vmksAKjxDQkllU4HhCWSBDTsCAFCMi3GDENjBUNENPoBFkEDLEIGBYBwyJgiEXAEIuAIRbBjqHjmf0U2vsU1QMWwQ4AArh+8jTdeft9SkQOUa1hEdQZLYBgc4s6Hz3WV3MhsAjqiFMAmloL4QkyROxAG33S+SpF9z2rHvLWv//Qpds/0djCb6V7Pjj4knwdoeEfp2kyv+BqP/L6CZpcXKDh2WlX/xdf7qH+UEQdd01kaPnhA9c9f7713oZz3LP88L4ag30c4b2tNN13ispRbgzbISzjvxZAev4HSnUeVdf1MYSQW12hmaW/yDRGRAAV4yEw6RNycfGg0X371bVg8x4lBoDj8JOtLkvQ4LNWeY8X/eGIWry17ztc6tPZHmRtEwlx4WUfh74X44VYneTurVC1aW3ZowSJMaTnbCKQxwDGkbt3l2qBERHgAUDneIbyq2sTiAWbiycp1XVUWuGvnpbrFywi+oP3gDfoD73oKQIAa+q59mXpfLNxQAD2e03yi/yuF776zPMzCEGLoRYYyQmelpaNydUCAFiM+Hfjyq2Ws26/6HiZkS49u7RYtOwWX20xjsmid+qQoYoxJII7cqIxySPS/dsXaObvRWV9dnFUQveB50uLqXMJ7X38tgcm3PzjiJFwMHTjW5o+eYqS0mKTRauFxToTMs3FV3pLMXEr4Prh0nU/eEd7tbDz7vsR+5EzaBKRg6r9RP4Plxhjsg9nMrkWTq5QNVCJ8KEjFP9+XIUDPyCBnIsPqvBQLuRtFyMiwMQh3sFtwxNgK6QTMsTirnGvbF5sOAu2eLv3gVC7es8URYB+dEiAEJzZNLzQ6LETG67BewzduObqG33lVu86nqV6yRl2ShBgVM6HXxF0Fz1ph0ysTWFsiwjslo+H//qNuNolOLP54dkpl4fAojq3bZgMnQ+gv3DRwrWgYs+1uUQAQR6Xloy21/tOq2sfyu/zSkxrmRjuJKqeE8B9jUjLg8XbwWKk52+q40pVresCANatXwPF64l27wJLXsZ+WF567qYSQ6rrNWLWqbongPssuezfkQSuu1O9r89XmJBpESA+Ot004i28jFdI0Fy6/bOKychTkKDWohDjl0GP8FQrjIQDWByStXmZ0KBYhEWH9cNi4REyHsnhVsDD6PaoqjkJNjdLEfTSQFtk08XFZCMsIBHtWdqY8EFEI478AaC/sQrG/H8w3f9mGBEBLA4xFyEhaauBo3KH+F/JFhEJEii3wHqXkGg/rMrQ5UB7nUjCs9jL1QgVSdtOYh1R10UyjRBfXLDIIKFi6Xblwf1tVQl3A/qHIXgjv6LSJXh4zyFDIcPo7gDkuSBTQhen4CF1wWorYkUPCCMyhXFPwKyDcIPfLXSC7Be1zf3myrYrreVgEdSB7uIPYH5Y+zl5kUxiPBwwbrCoM7Rz4P8sYlgEDIuAIRYBQywChlgEDCkRiGViGhopgsItYhoWi0Q2YFlWmpjGpfBorImuTuXozV4hiRHTUFgWpenM2U+b1NnVqSz19+blUVCQCBOzixHLFlmzUgGD9O7ZDK78B+DHOjaKGEKbAAAAAElFTkSuQmCC"
                  alt=""
                ></img>
              </div>
            </div>
            <div>
              <div className="profile-row">
                <div className="profile">
                  <img
                    src="http://13.234.30.40:3000/static/media/testimage1.8007b3625a4b89faa2fe.png"
                    alt=""
                  ></img>
                  <p>undefined undefined</p>
                </div>
                <div className="location-icon">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGiSURBVHgBvZQxT8JAFMf/V1QWDcTB1TrgIolNjKNJ1cWYEOUTEAZInLCLhk0m1IXgYqIm4BcwMa4SYWPQhEEml6qDbkLihKHntVig7bWUxd9A3l3v/Xjv8loCL65OdglIhkUSQMMAabG4QbXuNdLZMi+FcEXneZFMBkpMIsMdlf5o69jLqt5CQyY8sEjEaBxSwX6iV5kvmc5fJwOsQnZnI9rkwM5f5mWukPWf4KWIMyGEp4Jwh+yb0YTtgcz+0bJTWttGYjFqxMXmE5R6xakTyDLlVdgbjQGJSLQv08ksrWBnPuIQshpE8IXGnPURp0OOXGl2Dl7YK1SHV9XPN0dC+eUZTkjDjCx3SKl2S4ggmevaxzvi9zes1VVjfdZ8xOt326Gj0Gp9teVJqRAm3c4XxoQN94I53NaWk0qLghYxBpTQsuebgkDwiP2q8IeKDs0NbziFepVUS8JPdRqJ2z8OAvdkKlultKvAS0ahIH3QsO8HXDPuKnXENglD5shySB0e89LchT1pFbGNNhulLUtlLjIdAj9cnEoQtAKz5fTrwH/yCx1GiNtA8lWiAAAAAElFTkSuQmCC"
                    alt=""
                  ></img>
                  <span></span>
                </div>
              </div>
            </div>
            <div>
              <p className="pro-details">Product Details</p>
            </div>
            <div>
              <h3>₹ NaN</h3>
              <p>(Plus Shipping and VAT tax included)</p>
            </div>
            <div className="color-btns">
              <Link to="/" className="seller-btn">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAeCAYAAACiyHcXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGBSURBVHgB1ZaBVcIwEIb/8higG1g3cAPbDdjAbiJMYDdAN8AJcAQ2oE5AnaD+Z/N4z5C0vTRV+N47AilJ/tw1dwFI27bPtFM7nSOthBYjIDa5RoOIiOEBm61Gw5KWWn0fA2NyRGZp/a6TJCl8f+YOMzZHzCwiHXBlihm4EIFhd9eOvhQTBLrCcQ8l5jTsEYgrHCX03GECrnCojlcMLsJBK6Anh0M8vSqbWnnGNAz9ziUilJOnv9ezFFmzKWwRGWbIAz1ktO0CwxkyhC/Tjjm2uYjY0BrEo6ZV5vtqzIBEPkw6ltjl1nMRt8N4PkUAX7jGzCm5Ixs9moPWViWU6vqAAERA290tRuE7HeKBgjs6WJOLqL44y7NHWglFGl9aC3sFGF4wZynnohV3KgIOHgGz8SscXPwV/8ACV8BNioiZ1M5zakW8Iz6aZNjhSGpT2NPSBAG03T1Bc6dc056svg1Po/SH3SekNkD3fpQUDoeQH/7sdFB4yeYN1wA9UpnieC7z34rE8gnRxEPvAAAAAElFTkSuQmCC"
                  alt=""
                ></img>
                <span>CONTACT SELLER</span>
              </Link>
              <Link to="/" className="chat-whats-btn">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                ></img>
                <span>CHAT ON WHATSAPP</span>
              </Link>
              <Link to="/" className="click-buy-btn">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAeCAYAAACmPacqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHvSURBVHgBvVeBdcIgED1IB6ATSCeoGzQj2AmaDeoGukHtBLpB7QRNJ7CdIHYCXcCkh0A8Y0iCkvz3LpDkgAP+HQcAsC8AXtQLxDAsWOY2Rhk6oCUo0ggFvvOlrub3+NjDAGDuX3yHD4GyQIM+oX+kDf/43L19fUiUcLcx+QIGxaFNwXpab0QeE88dtynHPsr+iBLTv+In8BbtFEpP4hMIjuLJlN8dG5REtt4VEHxj+p52bSEI40Oujrgy0vdBZDWx0hgvxOGJzBfVCd51bJmCJrLQRM5/wA+CiNSlIq86ANgv1r2MUXhHmaG8oqyNcRLKc42rcqTrhTwNzmRzt3lqawy6Q9h4cBsKNQkrW3x/tn98VkZAuVVnnW9NBUtm6384YzIgHTwIoqRC4sAxxws8M8YsoSd03aYYzhIwFZVvgdrOwwqug40JYfOX6igdVyZf4WweIRz21KUtfFzbQrl4ostjh2mzLkx0DDoGyjWEQ/SiY83FDaLOsyQhvZUMLpP/qyBPhrBd5b41v1S3hlR1gxy2UWI6I7MriV2NzDSdNLpnh+2oboS2TI/geN4okEiaWw40BUB750rJtwe4ETHZlhloYmaOpRdkSz9M2zeyMiGit+teXpupTR0xZg6BIDRPGF2RuEE/QZ3NiWvNue4/R6nkbr1hx28AAAAASUVORK5CYII="
                  alt=""
                ></img>
                <span>CLICK TO BUY NOW</span>
              </Link>
            </div>
            <div className="posted-row">
              <b>Posted in</b>
              <span></span>
              <div>Google Maps</div>
            </div>
            <div>
              <b>Disclaimer :</b>
              <span>
                Product details are submitted by the seller. MyMedieQuip will
                carry out inspection and give you inspection report
                before&nbsp;you&nbsp;purchase.
              </span>
            </div>
          </div>
        </div>
        <div className="mt-5 pt-3">
          <div className="content-btns">
            <button className="detail-btn" onClick={() => handleButtonClick(1)}>
              DETAILS
            </button>
            <button className="photo-btn" onClick={() => handleButtonClick(2)}>
              PHOTOS
            </button>
            <button className="review-btn" onClick={() => handleButtonClick(3)}>
              REVIEW
            </button>
          </div>
          {activeButton === 1 && (
            <div>
              <table className="detail-table">
                <h3>Product Details</h3>
                <tr>
                  <td className="pro-brand">Brand</td>
                  <td className="pro-brand"></td>
                </tr>
                <tr>
                  <td className="pro-brand">Model</td>
                  <td className="pro-brand"></td>
                </tr>
                <tr>
                  <td className="pro-brand">Condition</td>
                  <td className="pro-brand">Good as New</td>
                </tr>
                <tr>
                  <td className="pro-brand">Warranty</td>
                  <td className="pro-brand">NO</td>
                </tr>
                <tr>
                  <td className="pro-brand">Shipping From</td>
                  <td className="pro-brand"></td>
                </tr>
                <tr>
                  <td className="pro-brand">Catagory</td>
                  <td className="pro-brand"></td>
                </tr>
                <tr>
                  <td className="pro-brand">Posted</td>
                  <td className="pro-brand"></td>
                </tr>
                <tr>
                  <td className="pro-brand">Visits</td>
                  <td className="pro-brand">0</td>
                </tr>
              </table>
            </div>
          )}
          {activeButton === 2 && <div></div>}
          {activeButton === 3 && (
            <div>
              {" "}
              <div className="container review-sect">
                <h4>4 REVIEWS FOR VARIABLE PRODUCT</h4>
                <div>
                  <div className="review-box">
                    <div className="row d-flex">
                      <div>
                        <img
                          className="review-person"
                          src="http://13.234.30.40:3000/static/media/testimage1.8007b3625a4b89faa2fe.png"
                          alt=""
                        ></img>
                      </div>
                      <div className="review-shadow">
                        <div className="row d-flex justify-content-between">
                          <div className="person-name">
                            <p>ISHA SHARMA</p>
                            <p className="review-date">17 June 2023</p>
                          </div>
                          <div className="rating-star">
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBlVLBTQMxEJxdEhHxugPB+1IBhgYgHaQD6IB8IUIxjyhlQCqADkgF4A64vJCQUPLhg8Qu9kWR7hB2YCRrvd4Zz9paIIG3sTGpOscKrxNTtIjvF9Zk/xZ3wGc+FNLmQYxDMddt8CMUhU+X9Cnd3LrlRucX32bluhIGZNLh0W8mFD6lzXzhyf5tahRUINqmlj6UAnKsMuWDoXMimCvQTwkDQt2v07DJva5qe2/4ZFVxgz8g8Dx/sOqkhvfxsSXCaIPQrvPGh31BHpDAjuptPW+ISZClxB+sR1Exb/GPcdRZ43JwEXcGTqpIuAuDsXv13COSrkKnFZlwWOe3Gj6KuYj09q/dbH2WX7rSh/PFxFhR7tf53yxiYcFMmoJlAAAAAElFTkSuQmCC"
                              alt=""
                            ></img>
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBlVLBTQMxEJxdEhHxugPB+1IBhgYgHaQD6IB8IUIxjyhlQCqADkgF4A64vJCQUPLhg8Qu9kWR7hB2YCRrvd4Zz9paIIG3sTGpOscKrxNTtIjvF9Zk/xZ3wGc+FNLmQYxDMddt8CMUhU+X9Cnd3LrlRucX32bluhIGZNLh0W8mFD6lzXzhyf5tahRUINqmlj6UAnKsMuWDoXMimCvQTwkDQt2v07DJva5qe2/4ZFVxgz8g8Dx/sOqkhvfxsSXCaIPQrvPGh31BHpDAjuptPW+ISZClxB+sR1Exb/GPcdRZ43JwEXcGTqpIuAuDsXv13COSrkKnFZlwWOe3Gj6KuYj09q/dbH2WX7rSh/PFxFhR7tf53yxiYcFMmoJlAAAAAElFTkSuQmCC"
                              alt=""
                            ></img>
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBlVLBTQMxEJxdEhHxugPB+1IBhgYgHaQD6IB8IUIxjyhlQCqADkgF4A64vJCQUPLhg8Qu9kWR7hB2YCRrvd4Zz9paIIG3sTGpOscKrxNTtIjvF9Zk/xZ3wGc+FNLmQYxDMddt8CMUhU+X9Cnd3LrlRucX32bluhIGZNLh0W8mFD6lzXzhyf5tahRUINqmlj6UAnKsMuWDoXMimCvQTwkDQt2v07DJva5qe2/4ZFVxgz8g8Dx/sOqkhvfxsSXCaIPQrvPGh31BHpDAjuptPW+ISZClxB+sR1Exb/GPcdRZ43JwEXcGTqpIuAuDsXv13COSrkKnFZlwWOe3Gj6KuYj09q/dbH2WX7rSh/PFxFhR7tf53yxiYcFMmoJlAAAAAElFTkSuQmCC"
                              alt=""
                            ></img>
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBlVLBTQMxEJxdEhHxugPB+1IBhgYgHaQD6IB8IUIxjyhlQCqADkgF4A64vJCQUPLhg8Qu9kWR7hB2YCRrvd4Zz9paIIG3sTGpOscKrxNTtIjvF9Zk/xZ3wGc+FNLmQYxDMddt8CMUhU+X9Cnd3LrlRucX32bluhIGZNLh0W8mFD6lzXzhyf5tahRUINqmlj6UAnKsMuWDoXMimCvQTwkDQt2v07DJva5qe2/4ZFVxgz8g8Dx/sOqkhvfxsSXCaIPQrvPGh31BHpDAjuptPW+ISZClxB+sR1Exb/GPcdRZ43JwEXcGTqpIuAuDsXv13COSrkKnFZlwWOe3Gj6KuYj09q/dbH2WX7rSh/PFxFhR7tf53yxiYcFMmoJlAAAAAElFTkSuQmCC"
                              alt=""
                            ></img>
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBlVLBTQMxEJxdEhHxugPB+1IBhgYgHaQD6IB8IUIxjyhlQCqADkgF4A64vJCQUPLhg8Qu9kWR7hB2YCRrvd4Zz9paIIG3sTGpOscKrxNTtIjvF9Zk/xZ3wGc+FNLmQYxDMddt8CMUhU+X9Cnd3LrlRucX32bluhIGZNLh0W8mFD6lzXzhyf5tahRUINqmlj6UAnKsMuWDoXMimCvQTwkDQt2v07DJva5qe2/4ZFVxgz8g8Dx/sOqkhvfxsSXCaIPQrvPGh31BHpDAjuptPW+ISZClxB+sR1Exb/GPcdRZ43JwEXcGTqpIuAuDsXv13COSrkKnFZlwWOe3Gj6KuYj09q/dbH2WX7rSh/PFxFhR7tf53yxiYcFMmoJlAAAAAElFTkSuQmCC"
                              alt=""
                            ></img>
                            <p>4.5</p>
                          </div>
                        </div>
                        <div className="wrote-review">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus ut libero odio. Nam elementum orci ut
                          enim rutrum fringilla. Integer pellentesque semper
                          erat id vestibulum. Vestibulum ultrices sapien orci,
                          ut auctor ipsum maximus in.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="review-box">
                    <div className="row d-flex">
                      <div>
                        <img
                          className="review-person"
                          src="http://13.234.30.40:3000/static/media/testimage1.8007b3625a4b89faa2fe.png"
                          alt=""
                        ></img>
                      </div>
                      <div className="review-shadow">
                        <div className="row d-flex justify-content-between">
                          <div className="person-name">
                            <p>ISHA SHARMA</p>
                            <p className="review-date">17 June 2023</p>
                          </div>
                          <div className="rating-star">
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBlVLBTQMxEJxdEhHxugPB+1IBhgYgHaQD6IB8IUIxjyhlQCqADkgF4A64vJCQUPLhg8Qu9kWR7hB2YCRrvd4Zz9paIIG3sTGpOscKrxNTtIjvF9Zk/xZ3wGc+FNLmQYxDMddt8CMUhU+X9Cnd3LrlRucX32bluhIGZNLh0W8mFD6lzXzhyf5tahRUINqmlj6UAnKsMuWDoXMimCvQTwkDQt2v07DJva5qe2/4ZFVxgz8g8Dx/sOqkhvfxsSXCaIPQrvPGh31BHpDAjuptPW+ISZClxB+sR1Exb/GPcdRZ43JwEXcGTqpIuAuDsXv13COSrkKnFZlwWOe3Gj6KuYj09q/dbH2WX7rSh/PFxFhR7tf53yxiYcFMmoJlAAAAAElFTkSuQmCC"
                              alt=""
                            ></img>
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBlVLBTQMxEJxdEhHxugPB+1IBhgYgHaQD6IB8IUIxjyhlQCqADkgF4A64vJCQUPLhg8Qu9kWR7hB2YCRrvd4Zz9paIIG3sTGpOscKrxNTtIjvF9Zk/xZ3wGc+FNLmQYxDMddt8CMUhU+X9Cnd3LrlRucX32bluhIGZNLh0W8mFD6lzXzhyf5tahRUINqmlj6UAnKsMuWDoXMimCvQTwkDQt2v07DJva5qe2/4ZFVxgz8g8Dx/sOqkhvfxsSXCaIPQrvPGh31BHpDAjuptPW+ISZClxB+sR1Exb/GPcdRZ43JwEXcGTqpIuAuDsXv13COSrkKnFZlwWOe3Gj6KuYj09q/dbH2WX7rSh/PFxFhR7tf53yxiYcFMmoJlAAAAAElFTkSuQmCC"
                              alt=""
                            ></img>
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBlVLBTQMxEJxdEhHxugPB+1IBhgYgHaQD6IB8IUIxjyhlQCqADkgF4A64vJCQUPLhg8Qu9kWR7hB2YCRrvd4Zz9paIIG3sTGpOscKrxNTtIjvF9Zk/xZ3wGc+FNLmQYxDMddt8CMUhU+X9Cnd3LrlRucX32bluhIGZNLh0W8mFD6lzXzhyf5tahRUINqmlj6UAnKsMuWDoXMimCvQTwkDQt2v07DJva5qe2/4ZFVxgz8g8Dx/sOqkhvfxsSXCaIPQrvPGh31BHpDAjuptPW+ISZClxB+sR1Exb/GPcdRZ43JwEXcGTqpIuAuDsXv13COSrkKnFZlwWOe3Gj6KuYj09q/dbH2WX7rSh/PFxFhR7tf53yxiYcFMmoJlAAAAAElFTkSuQmCC"
                              alt=""
                            ></img>
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBlVLBTQMxEJxdEhHxugPB+1IBhgYgHaQD6IB8IUIxjyhlQCqADkgF4A64vJCQUPLhg8Qu9kWR7hB2YCRrvd4Zz9paIIG3sTGpOscKrxNTtIjvF9Zk/xZ3wGc+FNLmQYxDMddt8CMUhU+X9Cnd3LrlRucX32bluhIGZNLh0W8mFD6lzXzhyf5tahRUINqmlj6UAnKsMuWDoXMimCvQTwkDQt2v07DJva5qe2/4ZFVxgz8g8Dx/sOqkhvfxsSXCaIPQrvPGh31BHpDAjuptPW+ISZClxB+sR1Exb/GPcdRZ43JwEXcGTqpIuAuDsXv13COSrkKnFZlwWOe3Gj6KuYj09q/dbH2WX7rSh/PFxFhR7tf53yxiYcFMmoJlAAAAAElFTkSuQmCC"
                              alt=""
                            ></img>
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBlVLBTQMxEJxdEhHxugPB+1IBhgYgHaQD6IB8IUIxjyhlQCqADkgF4A64vJCQUPLhg8Qu9kWR7hB2YCRrvd4Zz9paIIG3sTGpOscKrxNTtIjvF9Zk/xZ3wGc+FNLmQYxDMddt8CMUhU+X9Cnd3LrlRucX32bluhIGZNLh0W8mFD6lzXzhyf5tahRUINqmlj6UAnKsMuWDoXMimCvQTwkDQt2v07DJva5qe2/4ZFVxgz8g8Dx/sOqkhvfxsSXCaIPQrvPGh31BHpDAjuptPW+ISZClxB+sR1Exb/GPcdRZ43JwEXcGTqpIuAuDsXv13COSrkKnFZlwWOe3Gj6KuYj09q/dbH2WX7rSh/PFxFhR7tf53yxiYcFMmoJlAAAAAElFTkSuQmCC"
                              alt=""
                            ></img>
                            <p>4.5</p>
                          </div>
                        </div>
                        <div className="wrote-review">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus ut libero odio. Nam elementum orci ut
                          enim rutrum fringilla. Integer pellentesque semper
                          erat id vestibulum. Vestibulum ultrices sapien orci,
                          ut auctor ipsum maximus in.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="review-box">
                    <div className="row d-flex">
                      <div>
                        <img
                          className="review-person"
                          src="http://13.234.30.40:3000/static/media/testimage1.8007b3625a4b89faa2fe.png"
                          alt=""
                        ></img>
                      </div>
                      <div className="review-shadow">
                        <div className="row d-flex justify-content-between">
                          <div className="person-name">
                            <p>ISHA SHARMA</p>
                            <p className="review-date">17 June 2023</p>
                          </div>
                          <div className="rating-star">
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBlVLBTQMxEJxdEhHxugPB+1IBhgYgHaQD6IB8IUIxjyhlQCqADkgF4A64vJCQUPLhg8Qu9kWR7hB2YCRrvd4Zz9paIIG3sTGpOscKrxNTtIjvF9Zk/xZ3wGc+FNLmQYxDMddt8CMUhU+X9Cnd3LrlRucX32bluhIGZNLh0W8mFD6lzXzhyf5tahRUINqmlj6UAnKsMuWDoXMimCvQTwkDQt2v07DJva5qe2/4ZFVxgz8g8Dx/sOqkhvfxsSXCaIPQrvPGh31BHpDAjuptPW+ISZClxB+sR1Exb/GPcdRZ43JwEXcGTqpIuAuDsXv13COSrkKnFZlwWOe3Gj6KuYj09q/dbH2WX7rSh/PFxFhR7tf53yxiYcFMmoJlAAAAAElFTkSuQmCC"
                              alt=""
                            ></img>
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBlVLBTQMxEJxdEhHxugPB+1IBhgYgHaQD6IB8IUIxjyhlQCqADkgF4A64vJCQUPLhg8Qu9kWR7hB2YCRrvd4Zz9paIIG3sTGpOscKrxNTtIjvF9Zk/xZ3wGc+FNLmQYxDMddt8CMUhU+X9Cnd3LrlRucX32bluhIGZNLh0W8mFD6lzXzhyf5tahRUINqmlj6UAnKsMuWDoXMimCvQTwkDQt2v07DJva5qe2/4ZFVxgz8g8Dx/sOqkhvfxsSXCaIPQrvPGh31BHpDAjuptPW+ISZClxB+sR1Exb/GPcdRZ43JwEXcGTqpIuAuDsXv13COSrkKnFZlwWOe3Gj6KuYj09q/dbH2WX7rSh/PFxFhR7tf53yxiYcFMmoJlAAAAAElFTkSuQmCC"
                              alt=""
                            ></img>
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBlVLBTQMxEJxdEhHxugPB+1IBhgYgHaQD6IB8IUIxjyhlQCqADkgF4A64vJCQUPLhg8Qu9kWR7hB2YCRrvd4Zz9paIIG3sTGpOscKrxNTtIjvF9Zk/xZ3wGc+FNLmQYxDMddt8CMUhU+X9Cnd3LrlRucX32bluhIGZNLh0W8mFD6lzXzhyf5tahRUINqmlj6UAnKsMuWDoXMimCvQTwkDQt2v07DJva5qe2/4ZFVxgz8g8Dx/sOqkhvfxsSXCaIPQrvPGh31BHpDAjuptPW+ISZClxB+sR1Exb/GPcdRZ43JwEXcGTqpIuAuDsXv13COSrkKnFZlwWOe3Gj6KuYj09q/dbH2WX7rSh/PFxFhR7tf53yxiYcFMmoJlAAAAAElFTkSuQmCC"
                              alt=""
                            ></img>
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBlVLBTQMxEJxdEhHxugPB+1IBhgYgHaQD6IB8IUIxjyhlQCqADkgF4A64vJCQUPLhg8Qu9kWR7hB2YCRrvd4Zz9paIIG3sTGpOscKrxNTtIjvF9Zk/xZ3wGc+FNLmQYxDMddt8CMUhU+X9Cnd3LrlRucX32bluhIGZNLh0W8mFD6lzXzhyf5tahRUINqmlj6UAnKsMuWDoXMimCvQTwkDQt2v07DJva5qe2/4ZFVxgz8g8Dx/sOqkhvfxsSXCaIPQrvPGh31BHpDAjuptPW+ISZClxB+sR1Exb/GPcdRZ43JwEXcGTqpIuAuDsXv13COSrkKnFZlwWOe3Gj6KuYj09q/dbH2WX7rSh/PFxFhR7tf53yxiYcFMmoJlAAAAAElFTkSuQmCC"
                              alt=""
                            ></img>
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBlVLBTQMxEJxdEhHxugPB+1IBhgYgHaQD6IB8IUIxjyhlQCqADkgF4A64vJCQUPLhg8Qu9kWR7hB2YCRrvd4Zz9paIIG3sTGpOscKrxNTtIjvF9Zk/xZ3wGc+FNLmQYxDMddt8CMUhU+X9Cnd3LrlRucX32bluhIGZNLh0W8mFD6lzXzhyf5tahRUINqmlj6UAnKsMuWDoXMimCvQTwkDQt2v07DJva5qe2/4ZFVxgz8g8Dx/sOqkhvfxsSXCaIPQrvPGh31BHpDAjuptPW+ISZClxB+sR1Exb/GPcdRZ43JwEXcGTqpIuAuDsXv13COSrkKnFZlwWOe3Gj6KuYj09q/dbH2WX7rSh/PFxFhR7tf53yxiYcFMmoJlAAAAAElFTkSuQmCC"
                              alt=""
                            ></img>
                            <p>4.5</p>
                          </div>
                        </div>
                        <div className="wrote-review">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus ut libero odio. Nam elementum orci ut
                          enim rutrum fringilla. Integer pellentesque semper
                          erat id vestibulum. Vestibulum ultrices sapien orci,
                          ut auctor ipsum maximus in.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="review-box">
                    <div className="row d-flex">
                      <div>
                        <img
                          className="review-person"
                          src="http://13.234.30.40:3000/static/media/testimage1.8007b3625a4b89faa2fe.png"
                          alt=""
                        ></img>
                      </div>
                      <div className="review-shadow">
                        <div className="row d-flex justify-content-between">
                          <div className="person-name">
                            <p>ISHA SHARMA</p>
                            <p className="review-date">17 June 2023</p>
                          </div>
                          <div className="rating-star">
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBlVLBTQMxEJxdEhHxugPB+1IBhgYgHaQD6IB8IUIxjyhlQCqADkgF4A64vJCQUPLhg8Qu9kWR7hB2YCRrvd4Zz9paIIG3sTGpOscKrxNTtIjvF9Zk/xZ3wGc+FNLmQYxDMddt8CMUhU+X9Cnd3LrlRucX32bluhIGZNLh0W8mFD6lzXzhyf5tahRUINqmlj6UAnKsMuWDoXMimCvQTwkDQt2v07DJva5qe2/4ZFVxgz8g8Dx/sOqkhvfxsSXCaIPQrvPGh31BHpDAjuptPW+ISZClxB+sR1Exb/GPcdRZ43JwEXcGTqpIuAuDsXv13COSrkKnFZlwWOe3Gj6KuYj09q/dbH2WX7rSh/PFxFhR7tf53yxiYcFMmoJlAAAAAElFTkSuQmCC"
                              alt=""
                            ></img>
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBlVLBTQMxEJxdEhHxugPB+1IBhgYgHaQD6IB8IUIxjyhlQCqADkgF4A64vJCQUPLhg8Qu9kWR7hB2YCRrvd4Zz9paIIG3sTGpOscKrxNTtIjvF9Zk/xZ3wGc+FNLmQYxDMddt8CMUhU+X9Cnd3LrlRucX32bluhIGZNLh0W8mFD6lzXzhyf5tahRUINqmlj6UAnKsMuWDoXMimCvQTwkDQt2v07DJva5qe2/4ZFVxgz8g8Dx/sOqkhvfxsSXCaIPQrvPGh31BHpDAjuptPW+ISZClxB+sR1Exb/GPcdRZ43JwEXcGTqpIuAuDsXv13COSrkKnFZlwWOe3Gj6KuYj09q/dbH2WX7rSh/PFxFhR7tf53yxiYcFMmoJlAAAAAElFTkSuQmCC"
                              alt=""
                            ></img>
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBlVLBTQMxEJxdEhHxugPB+1IBhgYgHaQD6IB8IUIxjyhlQCqADkgF4A64vJCQUPLhg8Qu9kWR7hB2YCRrvd4Zz9paIIG3sTGpOscKrxNTtIjvF9Zk/xZ3wGc+FNLmQYxDMddt8CMUhU+X9Cnd3LrlRucX32bluhIGZNLh0W8mFD6lzXzhyf5tahRUINqmlj6UAnKsMuWDoXMimCvQTwkDQt2v07DJva5qe2/4ZFVxgz8g8Dx/sOqkhvfxsSXCaIPQrvPGh31BHpDAjuptPW+ISZClxB+sR1Exb/GPcdRZ43JwEXcGTqpIuAuDsXv13COSrkKnFZlwWOe3Gj6KuYj09q/dbH2WX7rSh/PFxFhR7tf53yxiYcFMmoJlAAAAAElFTkSuQmCC"
                              alt=""
                            ></img>
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBlVLBTQMxEJxdEhHxugPB+1IBhgYgHaQD6IB8IUIxjyhlQCqADkgF4A64vJCQUPLhg8Qu9kWR7hB2YCRrvd4Zz9paIIG3sTGpOscKrxNTtIjvF9Zk/xZ3wGc+FNLmQYxDMddt8CMUhU+X9Cnd3LrlRucX32bluhIGZNLh0W8mFD6lzXzhyf5tahRUINqmlj6UAnKsMuWDoXMimCvQTwkDQt2v07DJva5qe2/4ZFVxgz8g8Dx/sOqkhvfxsSXCaIPQrvPGh31BHpDAjuptPW+ISZClxB+sR1Exb/GPcdRZ43JwEXcGTqpIuAuDsXv13COSrkKnFZlwWOe3Gj6KuYj09q/dbH2WX7rSh/PFxFhR7tf53yxiYcFMmoJlAAAAAElFTkSuQmCC"
                              alt=""
                            ></img>
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBlVLBTQMxEJxdEhHxugPB+1IBhgYgHaQD6IB8IUIxjyhlQCqADkgF4A64vJCQUPLhg8Qu9kWR7hB2YCRrvd4Zz9paIIG3sTGpOscKrxNTtIjvF9Zk/xZ3wGc+FNLmQYxDMddt8CMUhU+X9Cnd3LrlRucX32bluhIGZNLh0W8mFD6lzXzhyf5tahRUINqmlj6UAnKsMuWDoXMimCvQTwkDQt2v07DJva5qe2/4ZFVxgz8g8Dx/sOqkhvfxsSXCaIPQrvPGh31BHpDAjuptPW+ISZClxB+sR1Exb/GPcdRZ43JwEXcGTqpIuAuDsXv13COSrkKnFZlwWOe3Gj6KuYj09q/dbH2WX7rSh/PFxFhR7tf53yxiYcFMmoJlAAAAAElFTkSuQmCC"
                              alt=""
                            ></img>
                            <p>4.5</p>
                          </div>
                        </div>
                        <div className="wrote-review">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus ut libero odio. Nam elementum orci ut
                          enim rutrum fringilla. Integer pellentesque semper
                          erat id vestibulum. Vestibulum ultrices sapien orci,
                          ut auctor ipsum maximus in.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="review-form">
                  <h2>add your review here</h2>
                  <div className="star-row">
                    <p>star rating</p>
                    <div className="five-stars">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHZSURBVHgBpVRLbsIwEHU+iGW5AekJ4AgBsW97gqYngC6RkGIWwLLqCUpPAF12AYQTND0BYdclXSJE0jeNVbmO27h0pCc7nvHL83g8jBnaZDLxAN803mXm9gB4wLlJsG0SRGoFaTIajQKTPUaKLcsKj8fj0LbtBCDlU/ZfE7ndSN8rE9WlqSC1aZoOpSVSHpbu+8nBOa9VKhUPJLN+v//twkg1hmi/398jbqfb7xKB4zg+QCR1rHlZljUx1oAd5reafXSCu2q12sNP6DsGEpxsC8Su68bWeDy+xHFnwByLawrAPIbKhBkYCcMPmiQG+xpYCkjMZypA3sNiF9OWKaFqoiQpRY/g4JbkCDCEp5CrpLRmKQHBX8l1pGSOHLRYLOJOp/OO6azdbj8vl8u3U0jJCnWMgCkFAgErNx94VUm1xGS4yDoQsRKj0sLQ0Pm0xCgXquWEldjhcKAYT+fTvjzkLsPxvnyiVruCZChfLPURNCh/MBhsZY5Cd0ODoVcXK4Q9YC6EbEDGWX5hCU62RtpaTOl4hVQgyMOwpdID6QvLL+gKJDdAwPJGT1ghJhQpa6o8BcXiaV5gegYQWST7RRoCUWoc/eUa41MpMfUJlj+QiP1i0g84qsNX/R8Hyd+qNeENywAAAABJRU5ErkJggg=="
                        alt=""
                      ></img>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHZSURBVHgBpVRLbsIwEHU+iGW5AekJ4AgBsW97gqYngC6RkGIWwLLqCUpPAF12AYQTND0BYdclXSJE0jeNVbmO27h0pCc7nvHL83g8jBnaZDLxAN803mXm9gB4wLlJsG0SRGoFaTIajQKTPUaKLcsKj8fj0LbtBCDlU/ZfE7ndSN8rE9WlqSC1aZoOpSVSHpbu+8nBOa9VKhUPJLN+v//twkg1hmi/398jbqfb7xKB4zg+QCR1rHlZljUx1oAd5reafXSCu2q12sNP6DsGEpxsC8Su68bWeDy+xHFnwByLawrAPIbKhBkYCcMPmiQG+xpYCkjMZypA3sNiF9OWKaFqoiQpRY/g4JbkCDCEp5CrpLRmKQHBX8l1pGSOHLRYLOJOp/OO6azdbj8vl8u3U0jJCnWMgCkFAgErNx94VUm1xGS4yDoQsRKj0sLQ0Pm0xCgXquWEldjhcKAYT+fTvjzkLsPxvnyiVruCZChfLPURNCh/MBhsZY5Cd0ODoVcXK4Q9YC6EbEDGWX5hCU62RtpaTOl4hVQgyMOwpdID6QvLL+gKJDdAwPJGT1ghJhQpa6o8BcXiaV5gegYQWST7RRoCUWoc/eUa41MpMfUJlj+QiP1i0g84qsNX/R8Hyd+qNeENywAAAABJRU5ErkJggg=="
                        alt=""
                      ></img>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHZSURBVHgBpVRLbsIwEHU+iGW5AekJ4AgBsW97gqYngC6RkGIWwLLqCUpPAF12AYQTND0BYdclXSJE0jeNVbmO27h0pCc7nvHL83g8jBnaZDLxAN803mXm9gB4wLlJsG0SRGoFaTIajQKTPUaKLcsKj8fj0LbtBCDlU/ZfE7ndSN8rE9WlqSC1aZoOpSVSHpbu+8nBOa9VKhUPJLN+v//twkg1hmi/398jbqfb7xKB4zg+QCR1rHlZljUx1oAd5reafXSCu2q12sNP6DsGEpxsC8Su68bWeDy+xHFnwByLawrAPIbKhBkYCcMPmiQG+xpYCkjMZypA3sNiF9OWKaFqoiQpRY/g4JbkCDCEp5CrpLRmKQHBX8l1pGSOHLRYLOJOp/OO6azdbj8vl8u3U0jJCnWMgCkFAgErNx94VUm1xGS4yDoQsRKj0sLQ0Pm0xCgXquWEldjhcKAYT+fTvjzkLsPxvnyiVruCZChfLPURNCh/MBhsZY5Cd0ODoVcXK4Q9YC6EbEDGWX5hCU62RtpaTOl4hVQgyMOwpdID6QvLL+gKJDdAwPJGT1ghJhQpa6o8BcXiaV5gegYQWST7RRoCUWoc/eUa41MpMfUJlj+QiP1i0g84qsNX/R8Hyd+qNeENywAAAABJRU5ErkJggg=="
                        alt=""
                      ></img>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHZSURBVHgBpVRLbsIwEHU+iGW5AekJ4AgBsW97gqYngC6RkGIWwLLqCUpPAF12AYQTND0BYdclXSJE0jeNVbmO27h0pCc7nvHL83g8jBnaZDLxAN803mXm9gB4wLlJsG0SRGoFaTIajQKTPUaKLcsKj8fj0LbtBCDlU/ZfE7ndSN8rE9WlqSC1aZoOpSVSHpbu+8nBOa9VKhUPJLN+v//twkg1hmi/398jbqfb7xKB4zg+QCR1rHlZljUx1oAd5reafXSCu2q12sNP6DsGEpxsC8Su68bWeDy+xHFnwByLawrAPIbKhBkYCcMPmiQG+xpYCkjMZypA3sNiF9OWKaFqoiQpRY/g4JbkCDCEp5CrpLRmKQHBX8l1pGSOHLRYLOJOp/OO6azdbj8vl8u3U0jJCnWMgCkFAgErNx94VUm1xGS4yDoQsRKj0sLQ0Pm0xCgXquWEldjhcKAYT+fTvjzkLsPxvnyiVruCZChfLPURNCh/MBhsZY5Cd0ODoVcXK4Q9YC6EbEDGWX5hCU62RtpaTOl4hVQgyMOwpdID6QvLL+gKJDdAwPJGT1ghJhQpa6o8BcXiaV5gegYQWST7RRoCUWoc/eUa41MpMfUJlj+QiP1i0g84qsNX/R8Hyd+qNeENywAAAABJRU5ErkJggg=="
                        alt=""
                      ></img>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHZSURBVHgBpVRLbsIwEHU+iGW5AekJ4AgBsW97gqYngC6RkGIWwLLqCUpPAF12AYQTND0BYdclXSJE0jeNVbmO27h0pCc7nvHL83g8jBnaZDLxAN803mXm9gB4wLlJsG0SRGoFaTIajQKTPUaKLcsKj8fj0LbtBCDlU/ZfE7ndSN8rE9WlqSC1aZoOpSVSHpbu+8nBOa9VKhUPJLN+v//twkg1hmi/398jbqfb7xKB4zg+QCR1rHlZljUx1oAd5reafXSCu2q12sNP6DsGEpxsC8Su68bWeDy+xHFnwByLawrAPIbKhBkYCcMPmiQG+xpYCkjMZypA3sNiF9OWKaFqoiQpRY/g4JbkCDCEp5CrpLRmKQHBX8l1pGSOHLRYLOJOp/OO6azdbj8vl8u3U0jJCnWMgCkFAgErNx94VUm1xGS4yDoQsRKj0sLQ0Pm0xCgXquWEldjhcKAYT+fTvjzkLsPxvnyiVruCZChfLPURNCh/MBhsZY5Cd0ODoVcXK4Q9YC6EbEDGWX5hCU62RtpaTOl4hVQgyMOwpdID6QvLL+gKJDdAwPJGT1ghJhQpa6o8BcXiaV5gegYQWST7RRoCUWoc/eUa41MpMfUJlj+QiP1i0g84qsNX/R8Hyd+qNeENywAAAABJRU5ErkJggg=="
                        alt=""
                      ></img>
                    </div>
                  </div>
                  <form>
                    <div className="form-info">
                      <div className="w-100">
                        <lable for="name">NAME</lable>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Enter your name"
                          required=""
                          value=""
                        ></input>
                      </div>
                      <div className="w-100">
                        <lable for="name">NAME</lable>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Enter your name"
                          required=""
                          value=""
                        ></input>
                      </div>
                      <div className="w-100">
                        <lable for="name">NAME</lable>
                        <textarea
                          class="prod_desc_DescPlaceholder__fyGBe"
                          id="prod_desc_review__jDDKN"
                          name="review"
                          rows="4"
                          placeholder="Enter your review in this box"
                          required=""
                        ></textarea>
                      </div>
                    </div>
                    <input
                      className="prod_desc_reviewSubmit__ixf81"
                      type="submit"
                      value="Submit Response"
                    ></input>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="hr-line">
          <hr></hr>
          <h6 className="text-center">RELATED PRODUCTS</h6>
          <hr></hr>
        </div>
        <div className="product-slide mb-4">
          <img
            className="prev-icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFgSURBVHgB7dqhTkNBEIXhc4HUgiEV8AAYGlxVUWARPAdvUIOp4B14CzDoqtriMaSiYMCQBgM9ogRxESQ7Oydz51drv+yayWzT3N58oUNtoWMlOHoJjl6Co5fg6CU4egn27uroBA9nlxgfD2HRDoQaD4Y/0FH/EHfPT5i/vaJkMjf8G7tpt9dD6STAbdjJfIbpywKlcwf/hZ08zmCRK7g2lrmBPbDMBeyFZdXBnlhWFeyNZdXAClhWBayCZeZgJSwzBathmRlYEctMwKpYVhzMsU4Vy4qD3z9XUG67uTi/RsGWqw+gAU7XN71pc7YY9/5bcTCbLheyaBMwU0WbgZki2hTM1NDmYKaErgJmKuhqYKaArgpm3ujqYOaJdgEzL7QbmHmgXcGsNlpit9Q2PnKmHuzto3Qy28M2tMX2UGo/TDQb9Q9wv94NWzzpJr8PBy/B0Utw9BIcvQRHL8HR6xz4G8Wk1dBjITW9AAAAAElFTkSuQmCC"
            alt=""
          ></img>
          <div className="slide-row">
          <div className="card-column">
              <div>
                <img
                  className="card-images"
                  src="http://13.234.30.40:3000/static/media/relatedCardImg.d37f3efeb7139e3c21b3.png"
                  alt=""
                ></img>
                <div className="card-contain">
                  <h5>Air Compressor</h5>
                  <p>product description</p>
                  <h4>₹ 1899.0000</h4>
                </div>
              </div>
            </div>
            <div className="card-column">
              <div>
                <img
                  className="card-images"
                  src="http://13.234.30.40:3000/static/media/relatedCardImg.d37f3efeb7139e3c21b3.png"
                  alt=""
                ></img>
                <div className="card-contain">
                  <h5>Air Compressor</h5>
                  <p>product description</p>
                  <h4>₹ 1899.0000</h4>
                </div>
              </div>
            </div>
            <div className="card-column">
              <div>
                <img
                  className="card-images"
                  src="http://13.234.30.40:3000/static/media/relatedCardImg.d37f3efeb7139e3c21b3.png"
                  alt=""
                ></img>
                <div className="card-contain">
                  <h5>Air Compressor</h5>
                  <p>product description</p>
                  <h4>₹ 1899.0000</h4>
                </div>
              </div>
            </div>
            <div className="card-column">
              <div>
                <img
                  className="card-images"
                  src="http://13.234.30.40:3000/static/media/relatedCardImg.d37f3efeb7139e3c21b3.png"
                  alt=""
                ></img>
                <div className="card-contain">
                  <h5>Air Compressor</h5>
                  <p>product description</p>
                  <h4>₹ 1899.0000</h4>
                </div>
              </div>
            </div>
          </div>
          <img
            className="prev-icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFfSURBVHgB7doxSkNBEMbxWZW02oiNB7AxCBapTKWthefwBmlsUihY2nkR61QpBFEQL5AidjYS0iR8kARCkm5n5mPe/OHBvvLHvGZ3XymvjzNpUHvSsBIcvQRHL8HRS3D0Ehy9BNfo/uxC3q7vpHfeEbYOpHJXJ6fydNldrVH/aygsVZ/w33Sy9t5rd6gmvV9ubx6kYuPJv0gR6S6mi5brwe9IvKsORoPxiBatAkasaDUwYkSrghEbWh2MmNAmYMSCNgMjBrQpGHmjzcHIE+0CRl5oNzDyQLuCkTWa4gCg/znc2EJil9U+OpbaUZ94HLZaUjsK8LY9M6Ye8pPehdU6JXEFW2ORG9gDi1zAXlhkDvbEIlOwNxaZgRmwyATMgkXqYCYsUgWzYZEamBGLVMCsWFQdjBtDVixSvz1kwiK120M8Lz8f8vz9LkyV/H04eAmOXoKjl+DoJTh6CY5e48Bz8YDWB9/LXB0AAAAASUVORK5CYII="
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Product;
