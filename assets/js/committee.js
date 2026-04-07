function buildCommitteeCard(member, extraClassName) {
  const cardClassName = extraClassName
    ? `committee-card ${extraClassName}`
    : 'committee-card';

  return `
    <article class="${cardClassName}">
      <div class="card-image-wrapper">
        <img src="${member.image}" alt="${member.name}, ${member.role}" class="committee-photo">
      </div>
      <div class="card-content">
        <h3 class="member-name">${member.name}</h3>
        <p class="member-role">${member.role}</p>
      </div>
    </article>
  `;
}

function renderCommitteeSection(containerId, members, extraClassName) {
  const container = document.getElementById(containerId);

  if (!container || !Array.isArray(members)) {
    return;
  }

  container.innerHTML = members
    .map(member => buildCommitteeCard(member, extraClassName))
    .join('');
}

renderCommitteeSection(
  'executive-committee-grid',
  window.committeeData && window.committeeData.executive,
  'executive-card'
);

renderCommitteeSection(
  'general-committee-grid',
  window.committeeData && window.committeeData.general
);
