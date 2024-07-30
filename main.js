//loading screen + logo + homepage button
(function() {
    var newContent = document.createElement("div");
    newContent.innerHTML = `
        <!-- loading-screen -->
        <div class="loading-screen" id="loading-screen">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-6ObqHMkC_rvTxDF5xre-wQpBaY2lwF7ik4sksOuIubZvlrsbc2x4bhZohUQvdRoxiRdUsgj9aXtniEbLObdPa6DWD84jLTAOEWHOOCWOddGLfwV-9deDQ02QjcN-w3jmvE24P6RFy8DDHHcRnBM9QHAfwbWScwjdOwxCf_uHIKbo0mBHJYenulNm2OSz/s320/Loading.gif" alt="Loading" style="background: white;">
            <p>Please wait. Loading Resources...</p>
        </div>
        
        <!-- logo -->
        <div class="logo">
            <a href="https://protestorsbd.blogspot.com"> 
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh30RAfpwx5NcdPYvlvanaBp3FWpRzSi9b4987AD4KeymTc2Qniux-6NKo4slJseIJxNQ2NKhtRjxjnvgQlTflDajmEGpzmA3Df1_eFRVwiNzprcyaXq793ZN7DSraJA4OHdmu4-ATmluMqeZolxQH137XT0XXT4La29z6pvpPJsC5dFOl5W1hmp1TPXXg/s320/savebd.png" alt="Save Bangladesh" style="height: 161px; width: 264px; margin-bottom: 20px; background:white;" />
            </a>
        </div>
        
        <!-- Homepage-button + User Contribution -->
        <div class="box">
            <a href="index.html"><button style="display: inline-block;">Homepage</button></a>
            <a href="mailto:mailomailcorp@gmail.com"><button style="display: inline-block;">Send Files</button></a>
        </div>
    `;
    document.body.insertBefore(newContent, document.body.firstChild);
})();


 // Video Section
    document.querySelectorAll('video').forEach(video => {
      const controlsHTML = `
          <div class="controls">
              <button class="play-pause"><i class="fas fa-play"></i></button>
              <div class="seekbar">
                  <input type="range" class="seek" value="0" step="0.1">
              </div>
              <span class="time">00:00 / 00:00</span>
              <button class="mute"><i class="fas fa-volume-up"></i></button>
              <button class="fullscreen"><i class="fas fa-expand"></i></button>
              <button class="download"><i class="fas fa-download"></i></button>
                <button class="settings"><i class="fas fa-cog"></i></button>
            </div>
            <div class="settings-menu">
                <label for="quality">Quality:</label>
                <select class="quality">
                    <option value="auto">Auto</option>
                    <option value="1080p">1080p</option>
                    <option value="720p">720p</option>
                    <option value="480p">480p</option>
                </select>
                <label for="speed">Speed:</label>
                <select class="speed">
                    <option value="1">Normal</option>
                    <option value="1.5">1.5x</option>
                    <option value="2">2x</option>
                </select>
            </div>`;

        const container = document.createElement('div');
        container.classList.add('video-container');
        video.parentNode.insertBefore(container, video);
        container.appendChild(video);
        container.innerHTML += controlsHTML;

        const playPauseBtn = container.querySelector('.play-pause');
        const seek = container.querySelector('.seek');
        const muteBtn = container.querySelector('.mute');
        const fullscreenBtn = container.querySelector('.fullscreen');
        const downloadBtn = container.querySelector('.download');
        const settingsBtn = container.querySelector('.settings');
        const settingsMenu = container.querySelector('.settings-menu');
        const qualitySelect = container.querySelector('.quality');
        const speedSelect = container.querySelector('.speed');
        const timeDisplay = container.querySelector('.time');

        const formatTime = (seconds) => {
            const minutes = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
        };

        playPauseBtn.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                video.pause();
                playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
        });

        video.addEventListener('timeupdate', () => {
            seek.value = video.currentTime;
            seek.max = video.duration;
            timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
        });

        seek.addEventListener('input', () => {
            video.currentTime = seek.value;
        });

        muteBtn.addEventListener('click', () => {
            video.muted = !video.muted;
            muteBtn.innerHTML = video.muted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
        });

        fullscreenBtn.addEventListener('click', () => {
            if (container.requestFullscreen) {
                container.requestFullscreen();
            }
        });

        downloadBtn.addEventListener('click', () => {
            const a = document.createElement('a');
            a.href = video.src;
            a.download = 'video.mp4';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });

        settingsBtn.addEventListener('click', () => {
            settingsMenu.style.display = settingsMenu.style.display === 'none' ? 'block' : 'none';
        });

        qualitySelect.addEventListener('change', () => {
            console.log(`Quality set to: ${qualitySelect.value}`);
        });

        speedSelect.addEventListener('change', () => {
            video.playbackRate = parseFloat(speedSelect.value);
        });
    });
    
    //Audio Section:
    document.querySelectorAll('audio').forEach(audio => {
            // Create a container div
            const container = document.createElement('div');
            container.className = 'audio-container';

            // Create a heading and body text
            const heading = document.createElement('div');
            heading.className = 'audio-heading';
            heading.textContent = 'Recorded Audio';

            const bodyText = document.createElement('div');
            bodyText.className = 'audio-body';
            bodyText.innerHTML = 'This audio has been recorded while the movement. Or it is a call recording.';

            // Add controls to the audio element
            audio.setAttribute('controls', '');

            // Wrap the audio element with the container
            audio.parentNode.insertBefore(container, audio);
            container.appendChild(heading);
            container.appendChild(bodyText);
            container.appendChild(audio);
        });
        
    // iframe Section:
    document.querySelectorAll('iframe').forEach(iframe => {
            // Create a container div
            const container = document.createElement('div');
            container.className = 'iframe-container';

            // Create a heading
            const heading = document.createElement('div');
            heading.className = 'iframe-heading';
            heading.textContent = 'Showing From another website';

            // Wrap the iframe element with the container
            iframe.parentNode.insertBefore(container, iframe);
            container.appendChild(heading);
            container.appendChild(iframe);
        });
    
     //loading screen
    document.addEventListener("DOMContentLoaded", function() {
      setTimeout(function() {
        document.getElementById("loading-screen").style.display = "none";
      }, 2000);
    });

//footer part part:
document.addEventListener("DOMContentLoaded", function() {
    var newDiv = document.createElement("div");
    newDiv.className = "box others";
    newDiv.innerHTML = `
        <a href="#"><button style="display: inline-block;">FAQ</button></a>
        <a href="mailto:mailomailcorp@gmail.com"><button style="display: inline-block;">Your Opinion</button></a>
    `;
    
    var body = document.body;
    var lastScript = body.querySelector("script:last-of-type");
    if (lastScript) {
        body.insertBefore(newDiv, lastScript);
    } else {
        body.appendChild(newDiv);
    }
});