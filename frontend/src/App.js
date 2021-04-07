import Header from './Header';
import Mew from './assets/images/mew.svg';
import './assets/stylesheets/global.css';
import './assets/stylesheets/index.css';

function App() {
	return (
		<>
			<Header />
			<main>
				<div class="main-container">
					<h1>Legendaries</h1>
					<div class="legendaries-info">
						<div class="legendaries-main-img">
							<img src={Mew} />
						</div>
						<div class="legendaries-info-content">
							<h2 class="legendaries-name"> </h2>
							<p class="legendaries-description"></p>
							<div class="legendaries-stats">
								<div class="legendaries-stats-card">
									<p class="card-title">Healthy Points</p>
									<p class="card-content"></p>
									<div class="card-charge-loader">
										<div class="card-charge-loader-filled"></div>
										<div class="card-charge-loader-empty"></div>
									</div>
								</div>
								<div class="legendaries-stats-card">
									<p class="card-title">Experience</p>
									<p class="card-content"></p>
									<div class="card-charge-loader">
										<div class="card-charge-loader-filled"></div>
										<div class="card-charge-loader-empty"></div>
									</div>
								</div>
								<div class="legendaries-stats-card">
									<p class="card-title">Attack</p>
									<p class="card-content"></p>
									<div class="card-charge-loader">
										<div class="card-charge-loader-filled"></div>
										<div class="card-charge-loader-empty"></div>
									</div>
								</div>
								<div class="legendaries-stats-card">
									<p class="card-title">Defense</p>
									<p class="card-content"></p>
									<div class="card-charge-loader">
										<div class="card-charge-loader-filled"></div>
										<div class="card-charge-loader-empty"></div>
									</div>
								</div>
								<div class="legendaries-stats-card">
									<p class="card-title">Special Attack</p>
									<p class="card-content"></p>
									<div class="card-charge-loader">
										<div class="card-charge-loader-filled"></div>
										<div class="card-charge-loader-empty"></div>
									</div>
								</div>
								<div class="legendaries-stats-card">
									<p class="card-title">Special Defense</p>
									<p class="card-content"></p>
									<div class="card-charge-loader">
										<div class="card-charge-loader-filled"></div>
										<div class="card-charge-loader-empty"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
